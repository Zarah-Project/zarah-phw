const getImageData = (imageData, size='large') => {
    if (!imageData) {
        return {'url': ''}
    }

    /*
    if (imageData['data'] === null) {
        return {'url': ''}
    }
    */

    let data={};

    if (imageData['formats'] !== null) {
        if (size in imageData['formats']) {
            data['url'] = imageData['formats'][size]['url']
            data['width'] = imageData['formats'][size]['width']
            data['height'] = imageData['formats'][size]['height']
        } else {
            data['url'] = imageData['url']
            data['width'] = imageData['width']
            data['height'] = imageData['height']
        }
    } else {
        data['url'] = imageData['url']
        data['width'] = imageData['width']
        data['height'] = imageData['height']
    }

    const server = process.env.NEXT_PUBLIC_STPAPI_DOMAIN;
    data['url'] = `${server}${data['url']}`

    return data
}

export default getImageData;