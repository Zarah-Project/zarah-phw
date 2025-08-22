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