import fetcher from "@/utils/api/fetcher";
import fetcherSlug from "@/utils/api/fetcherSlug";

export const fetchEssaysFrontPage = () => {
    const params = {
        'sort[0]': 'createdAt:desc',
        'populate[0]': 'Image',
        'pagination[start]': 0,
        'pagination[limit]': 3,
        'fields[0]': 'Title',
        'fields[2]': 'ShortDescription',
        'fields[3]': 'Slug'
    }

    return fetcher('essays', params)
}

export const fetchEssaysList = (page) => {
    const params = {
        'sort[0]': 'createdAt:desc',
        'populate[0]': 'Image',
        'pagination[start]': 0,
        'pagination[limit]': 50,
        'fields[0]': 'Title',
        'fields[2]': 'ShortDescription',
        'fields[3]': 'Slug',
    }

    return fetcher('essays', params)
}

export const fetchEssayDetail = (id) => {
    let params = {
        'fields[0]': 'Title',
        'fields[1]': 'ShortDescription',
        'fields[2]': 'Slug',
        'fields[3]': 'Content',
        'fields[4]': 'Tags',
        'populate[Image][fields][0]': 'formats',
        'populate[People][fields][0]': 'Name',
        'populate[People][fields][1]': 'Slug',
        'populate[People][populate][Image][fields][0]': 'formats',
        'populate[People][populate][PersonGroup][fields][1]': 'Group',
        'populate[ActivismStories][fields][0]': 'Title',
        'populate[ActivismStories][fields][1]': 'Slug',
        'populate[ActivismStories][populate][ActivismType][fields][0]': 'Type',
        'populate[Networks][fields][0]': 'Title',
        'populate[Networks][fields][1]': 'Slug',
        'populate[Networks][fields][2]': 'Place',
        'populate[Networks][fields][3]': 'StartDate',
        'populate[Networks][fields][4]': 'EndDate',
    }

    if (isNaN(Number(id))) {
        params['filters[Slug][$eq]'] = id
        return fetcherSlug(`essays`, params)
    } else {
        return fetcher(`essays/${id}`, params)
    }
}