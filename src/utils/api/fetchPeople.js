import fetcher from "@/utils/api/fetcher";
import fetcherSlug from "@/utils/api/fetcherSlug";

export const fetchPeopleList = () => {
    const params = {
        'sort[0]': 'Name',
        'populate[0]': 'Image',
        'populate[1]': 'PersonGroup',
        'pagination[start]': 0,
        'pagination[limit]': 200,
        'fields[0]': 'Name',
        'fields[1]': 'CardText',
        'fields[2]': 'Tags',
        'fields[3]': 'Slug',
    }

    return fetcher('people', params)
}

export const fetchPersonDetail = (id) => {
    let params = {
        'fields[0]': 'Name',
        'fields[1]': 'Slug',
        'fields[2]': 'Content',
        'fields[3]': 'Tags',
        'populate[Image][fields][0]': 'formats',
        'populate[ActivismStories][fields][0]': 'Title',
        'populate[ActivismStories][fields][1]': 'Slug',
        'populate[ActivismStories][populate][ActivismType][fields][0]': 'Type',
        'populate[Networks][fields][0]': 'Title',
        'populate[Networks][fields][1]': 'Slug',
        'populate[Networks][fields][2]': 'Place',
        'populate[Networks][fields][3]': 'StartDate',
        'populate[Networks][fields][4]': 'EndDate',
        'populate[Essays][fields][0]': 'Title',
        'populate[Essays][fields][1]': 'Slug',
        'populate[Essays][fields][2]': 'ShortDescription',
        'populate[Essays][populate][Image][fields][0]': 'formats',
    }

    if (isNaN(Number(id))) {
        params['filters[Slug][$eq]'] = id
        return fetcherSlug(`people`, params)
    } else {
        return fetcher(`essays/${id}`, params)
    }
}