import fetcher from "@/utils/api/fetcher";
import fetcherSlug from "@/utils/api/fetcherSlug";


export const fetchNetworksList = () => {
    const params = {
        'populate[Networks][fields][0]': 'Title',
        'populate[Networks][fields][1]': 'StartDate',
        'populate[Networks][fields][2]': 'EndDate',
        'populate[Networks][fields][3]': 'Tags',
        'populate[Networks][fields][4]': 'Content',
        'populate[Networks][fields][5]': 'Slug',
        'populate[Networks][sort][0]': 'StartDate:asc',
        'pagination[limit]': 50,
        'sort[0]': 'City:asc',
    }

    return fetcher('network-cities', params)
}

export const fetchNetworkDetail = (id) => {
    let params = {
        'fields[0]': 'Title',
        'fields[1]': 'StartDate',
        'fields[2]': 'EndDate',
        'fields[3]': 'Slug',
        'fields[4]': 'Content',
        'fields[5]': 'Tags',
        'populate[People][fields][0]': 'Name',
        'populate[People][fields][1]': 'Slug',
        'populate[People][populate][Image][fields][0]': 'formats',
        'populate[People][populate][PersonGroup][fields][1]': 'Group',
        'populate[ActivismStories][fields][0]': 'Title',
        'populate[ActivismStories][fields][1]': 'Slug',
        'populate[ActivismStories][populate][ActivismType][fields][0]': 'Type',
        'populate[Essays][fields][0]': 'Title',
        'populate[Essays][fields][1]': 'Slug',
        'populate[NetworkCity][fields][0]': 'City',
        'populate[Sources][fields][0]': 'Title',
        'populate[Sources][fields][1]': 'Slug',
    }

    if (isNaN(Number(id))) {
        params['filters[Slug][$eq]'] = id
        return fetcherSlug(`networks`, params)
    } else {
        return fetcher(`networks/${id}`, params)
    }
}