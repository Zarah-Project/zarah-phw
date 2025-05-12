import style from "./PageTemplate.module.scss";
import Spacer from "@/components/BaseElements/Spacer";
import Photo from "@/components/BaseElements/Photo";

const ActivismPageTemplate = () => {
    return (
        <div className={style.PageWrapper}>
            <div className={style.RelatedContent}></div>
            <div className={style.PageContent}>
                <h2>Addressing the needs of the Roma</h2>
                <Spacer size={"xl"}/>
                <p>
                    The Cultural Association of Gypsies in Hungary (MCKSZ), established in 1957, became a pioneering
                    platform for advocating Romani rights. The association, led by Mária László, mobilized to address
                    critical barriers affecting Romani communities’ access to employment, public services, and equal
                    opportunities in a political environment that increasingly viewed Roma not as an ethnic minority
                    but as a marginalized social group to be integrated into the working class. At least initially,
                    thanks to its commitment to class-based solidarity, the state socialist regime supported MCKSZ.
                </p>
                <Spacer size={"xl"}/>
                <Photo image={'activism01.jpg'} caption={'Textile factory in Kispest'} height={'400px'}/>
                <Spacer size={"xl"}/>
                <p>
                    The Cultural Association of Gypsies in Hungary (MCKSZ), established in 1957, became a pioneering
                    platform for advocating Romani rights. The association, led by Mária László, mobilized to address
                    critical barriers affecting Romani communities’ access to employment, public services, and equal
                    opportunities in a political environment that increasingly viewed Roma not as an ethnic minority
                    but as a marginalized social group to be integrated into the working class. At least initially,
                    thanks to its commitment to class-based solidarity, the state socialist regime supported MCKSZ.
                </p>
                <Spacer size={"xl"}/>
                <div className={style.Quote}>
                    “Our state organizations could provide local authorities much help in their work concerning Gypsies.
                    We are often confronted with a lack of understanding, but also with the fact that due to not
                    knowing the specificities of the life of the Gypsies, well-meant efforts remain without results.”
                    Mária László
                </div>
                <Spacer size={"xl"}/>
                <p>
                    Employment was another key focus, especially for Romani craftspeople like nail smiths and weavers. Many of these artisans had formed co-operatives, and MCKSZ worked to protect their livelihoods by mediating between co-operative members, local officials, and sometimes resistant local communities. The association called on the state to provide political education to address widespread prejudice, believing that reducing local bias would support Romani economic stability.
                </p>
                <Spacer size={"xl"}/>
                <p>
                    Collaborations with national organizations, including the National Council of Trade Unions (SZOT), the National Council of Hungarian Women (MNOT), and the Hungarian Red Cross, were central to MCKSZ’s strategy. Through these partnerships, the association worked to enhance Romani access to employment, healthcare, and education, ensuring that both Romani men and women had a voice in local decision-making. MCKSZ succeeded in including Romani women activists in MNOT branches, promoting gender-inclusive representation in policy discussions and social services.
                </p>
                <Spacer size={"xl"}/>
                <p>Despite these achievements, political shifts at the end of the 1950s led to the dissolution of MCKSZ in 1961, marking a shift away from supporting Romani-led initiatives. Although short-lived, the association’s work set a foundation for Romani advocacy, demonstrating the potential of organized action for achieving social justice and laying important groundwork for future rights movements in Hungary.</p>
                <Spacer size={"xl"}/>
            </div>
        </div>
    )
}

export default ActivismPageTemplate;