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

export const fetchActivismTypes = (page) => {
    const params = {
        'sort[0]': 'Sort',
        'pagination[start]': 0,
        'pagination[limit]': 20,
        'fields[0]': 'Type',
        'fields[1]': 'Description',
        'populate[Image][fields][0]': 'formats',
        'populate[ActivismStories][fields][0]': 'Title',
        'populate[ActivismStories][fields][1]': 'ShortDescription',
        'populate[ActivismStories][fields][2]': 'Slug',
        'populate[ActivismStories][populate][Image][fields][0]': 'formats',
    }

    return fetcher('activism-types', params)
}