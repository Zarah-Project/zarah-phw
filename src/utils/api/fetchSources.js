import fetcher from "@/utils/api/fetcher";
import fetcherSlug from "@/utils/api/fetcherSlug";

export const fetchSourcesList = (page) => {
    const params = {
        'sort[0]': 'createdAt:desc',
        'populate[0]': 'Image',
        'pagination[start]': 0,
        'pagination[limit]': 50,
        'fields[0]': 'Title',
        'fields[2]': 'ShortDescription',
        'fields[3]': 'Slug',
    }

    return fetcher('sources', params)
}

export const fetchSourcesDetail = (id) => {
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
        'populate[Networks][populate][NetworkCity][fields][0]': 'City',
        'populate[Networks][fields][3]': 'StartDate',
        'populate[Networks][fields][4]': 'EndDate',
        'populate[Essays][fields][0]': 'Title',
        'populate[Essays][fields][1]': 'Slug',
        'populate[Essays][fields][2]': 'ShortDescription',
        'populate[Essays][populate][Image][fields][0]': 'formats',
    }

    if (isNaN(Number(id))) {
        params['filters[Slug][$eq]'] = id
        return fetcherSlug(`sources`, params)
    } else {
        return fetcher(`sources/${id}`, params)
    }
}