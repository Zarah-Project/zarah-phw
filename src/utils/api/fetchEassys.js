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
        'populate[0]': 'Image',
        'populate[1]': 'ActivismStories',
        'populate[2]': 'Networks',
        'populate[3]': 'People',
        'fields[0]': 'Title',
        'fields[2]': 'ShortDescription',
        'fields[3]': 'Slug',
        'fields[4]': 'Content',
        'fields[5]': 'Tags'
    }

    if (isNaN(Number(id))) {
        params['filters[Slug][$eq]'] = id
        return fetcherSlug(`essays`, params)
    } else {
        return fetcher(`essays/${id}`, params)
    }
}