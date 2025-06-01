import fetcher from "@/utils/api/fetcher";

export const fetchActivismTypesFrontPage = () => {
    const params = {
        'sort[0]': 'Sort',
        'populate[0]': 'Image',
        'pagination[start]': 0,
        'pagination[limit]': 20,
        'fields[0]': 'TypeWithImage',
        'fields[1]': 'Type'
    }

    return fetcher('activism-types', params)
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