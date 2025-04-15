const getTheme = (pathName) => {
    const mainPaths = {
        '/': 'dark',
        '/essays': 'light',
    }

    Object.entries(mainPaths).forEach(([key, value]) => {
        if (pathName === key) {
            console.log(value)
            return value;
        }
    })
}

export default getTheme