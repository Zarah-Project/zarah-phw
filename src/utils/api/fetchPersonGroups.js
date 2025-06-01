import fetcher from "@/utils/api/fetcher";

export const fetchPersonGroupsList = () => {
    const params = {
        'sort[0]': 'Sort',
        'populate[0]': 'People',
        'pagination[start]': 0,
        'pagination[limit]': 20,
        'fields[0]': 'Group',
        'fields[1]': 'Description'
    }

    return fetcher('person-groups', params)
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