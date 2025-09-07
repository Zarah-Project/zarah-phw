import fetcherSlug from "@/utils/api/fetcherSlug";
import fetcher from "@/utils/api/fetcher";

export const fetchActivismStory = (id) => {
    let params = {
        'fields[0]': 'Title',
        'fields[1]': 'ShortDescription',
        'fields[2]': 'Slug',
        'fields[3]': 'Content',
        'fields[4]': 'Tags',
        'populate[Image][fields][0]': 'formats',
        'populate[Essays][fields][0]': 'Title',
        'populate[Essays][fields][1]': 'Slug',
        'populate[Essays][fields][2]': 'ShortDescription',
        'populate[Essays][populate][Image][fields][0]': 'formats',
        'populate[People][fields][0]': 'Name',
        'populate[People][fields][1]': 'Slug',
        'populate[People][populate][Image][fields][0]': 'formats',
        'populate[People][populate][PersonGroup][fields][1]': 'Group',
        'populate[Networks][fields][0]': 'Title',
        'populate[Networks][fields][1]': 'Slug',
        'populate[Networks][populate][NetworkCity][fields][0]': 'City',
        'populate[Networks][fields][3]': 'StartDate',
        'populate[Networks][fields][4]': 'EndDate'
    }

    if (isNaN(Number(id))) {
        params['filters[Slug][$eq]'] = id
        return fetcherSlug(`activism-stories`, params)
    } else {
        return fetcher(`activism-stories/${id}`, params)
    }
}