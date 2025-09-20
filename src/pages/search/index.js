import React, { useState, useEffect } from "react";
import styles from "./search.module.scss";
import LayoutLight from "@/components/Layout/LayoutLight";
import Head from "next/head";
import Spacer from "@/components/BaseElements/Spacer";
import { Meilisearch } from "meilisearch";
import {useRouter} from "next/router";
import FiltersPage from "@/components/Search/FiltersPage";
import {useList, useSet} from "react-use";
import TagFilterButton from "@/components/BaseElements/TagFilterButton";
import ResultsPage from "@/components/Search/ResultsPage";
import Loading from "@/components/BaseElements/Loading";
import {Media} from "@/utils/media";

const server = process.env.NEXT_PUBLIC_MEILISEARCH_URL
const apiKey = process.env.NEXT_PUBLIC_MEILISEARCH_API_KEY

export default function SearchPage() {
    const router = useRouter();
    const { q, tags, type } = router.query;

    const [query, setQuery] = useState("");
    const [selectedTags, { set, clear }] = useList([]);

    const [results, setResults] = useState([]);
    const [facets, setFacets] = useState({});
    const [types, setTypes] = useState({});

    const [totalHits, setTotalHits] = useState(0);

    const [loading, setLoading] = useState(false);

    const [view, setView] = useState("filters");

    // 🔹 Sync URL → state (input + tags)
    useEffect(() => {
        if (!router.isReady) return;

        // Handle input
        if (typeof q === "string") {
            setQuery(q);
            setView('results')
        } else {
            setQuery("");
        }

        // Handle tags
        if (typeof tags === "string") {
            const fromUrl = tags.split(",").filter(Boolean);
            set(fromUrl);
            setView('results')
        } else {
            clear();
        }

        if (typeof q !== "string" && typeof tags !== "string") {
            setView('filters')
        }

    }, [router.isReady, q, tags]);

    // 🔹 Run search whenever URL changes
    useEffect(() => {
        if (!router.isReady) return;

        const runSearch = async () => {
            setLoading(true);

            const client = new Meilisearch({
                host: server,
                apiKey: apiKey,
            })

            const index = client.index('labouractivism')

            const options = {
                facets: ['Tags', 'type'],
                limit: 100
            }

            const getFilters = () => {
                if (typeof tags !== "string") return [];
                const tagsFromUrl = tags.split(",").filter(Boolean);
                const filters = []
                tagsFromUrl.forEach ((tag) => {
                    filters.push(`Tags='${tag}'`)
                })
                return filters.join(' AND ')
            }

            const filterOptions = getFilters()
            if (filterOptions.length > 0) {
                options['filter'] = filterOptions
            }

            const search = await index.search(q, options)

            const tagFacets = Object.keys(search['facetDistribution']['Tags'] || [])
            const typeFacets = search['facetDistribution']['type'] || []

            setResults(search['hits'])
            setTotalHits(search['estimatedTotalHits'])

            // Group tags alphabetically
            const grouped = {};
            tagFacets.forEach(tag => {
                const letter = tag[0].toUpperCase();
                if (!grouped[letter]) grouped[letter] = [];
                grouped[letter].push(tag);
            });
            setFacets(grouped);

            // Add document types
            setTypes(typeFacets);

            setLoading(false);
        };

        runSearch();
    }, [router.isReady, q, tags]);

    // 🔹 Update URL when searching
    const handleSearch = () => {
        const queryParams= {};
        if (query) queryParams.q = query;
        if (selectedTags.length > 0) {
            queryParams.tags = selectedTags.join(",");
        }

        router.push({ pathname: "/search", query: queryParams }, undefined, {
            shallow: true,
        });
    };

    // 🔹 Toggle a tag
    const toggleTag = (tag) => {
        const newTags = new Array(...selectedTags);

        if (newTags.includes(tag)) {
            const idx = newTags.indexOf(tag);
            newTags.splice(idx, 1);
        } else {
            newTags.push(tag);
        }

        const queryParams = {};
        if (query) queryParams.q = query;
        if (newTags.length > 0) {
            queryParams.tags = newTags.join(",");
        }

        router.push({ pathname: "/search", query: queryParams }, undefined, {
            shallow: true,
        });
    };

    // 🔹 Clear search
    const handleClear = () => {
        setQuery("");
        setResults([]);

        const queryParams= {};
        if (selectedTags.length > 0) {
            queryParams.tags = selectedTags.join(",");
        }

        router.push({ pathname: "/search", query: queryParams }, undefined, {
            shallow: true,
        });
    };

    const renderSearchContent = () => {
        if (view === 'filters') {
            return <FiltersPage facets={facets} onSetSelectedTags={toggleTag} />
        } else {
            return loading ? <Loading/> :
                <ResultsPage
                    hits={results}
                    types={types}
                    total={totalHits}
                />
        }
    }

    const renderSearchInput = () => {
        return (
            <div className={styles.InputWrapper}>
                <input
                    type="text"
                    placeholder="I am interested in..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Escape") {
                            setQuery("");
                        }
                        if (e.key === "Enter") {
                            handleSearch()
                            setView('results')
                            e.preventDefault();
                        }
                    }}
                />
                {query && (
                    <button
                        type="button"
                        className={styles.ClearButton}
                        onClick={() => {
                            handleClear()
                        }}
                        aria-label="Clear search input"
                    >
                        ×
                    </button>
                )}
            </div>
        )
    }

    return (
        <>
            <Head>
                <title>Women's Labour Activism - Search</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className={styles.Section}>
                <Spacer size={'xxl'}/>

                {/* Search Bar */}
                <Media greaterThanOrEqual="md">
                    <div className={styles.SearchBar}>
                        {renderSearchInput()}
                        <button onClick={(e) => handleSearch()} className={styles.SearchButton}>
                            <h1>Search</h1>
                        </button>
                    </div>
                    <div className={styles.ViewChanger}>
                        <div className={styles.SelectedTags}>
                            {
                                [...selectedTags].map(tag => {
                                    return <TagFilterButton label={tag} onRemove={toggleTag}/>
                                })
                            }
                        </div>
                        <button
                            className={styles.ViewChangerButton}
                            onClick={(e) => setView(view === 'filters' ? 'results' : 'filters')}>
                          <h5>{view === 'filters' ? 'Show Results' : 'Show Filters'}</h5>
                      </button>
                  </div>
              </Media>
                <Media lessThan="md">
                    <div className={styles.SearchBar}>
                        {renderSearchInput()}
                    </div>
                    <div className={styles.SearchBarUnderMobile}>
                        <button onClick={(e) => handleSearch()} className={styles.SearchButton}>
                            <h1>Search</h1>
                        </button>
                        <button
                            className={styles.ViewChangerButton}
                            onClick={(e) => setView(view === 'filters' ? 'results' : 'filters')}>
                            <h5>{view === 'filters' ? 'Show Results' : 'Show Filters'}</h5>
                        </button>
                    </div>
                    <div className={styles.SelectedTagsMobile}>
                        {
                            [...selectedTags].map(tag => {
                                return <TagFilterButton label={tag} onRemove={toggleTag}/>
                            })
                        }
                    </div>
                </Media>

                <Spacer size={'xxl'}/>
                {renderSearchContent()}
                <Spacer size={'xxl'}/>
            </div>
        </>
    );
}

SearchPage.getLayout = function getLayout(page) {
    return (
        <LayoutLight>
            {page}
        </LayoutLight>
    )
}
