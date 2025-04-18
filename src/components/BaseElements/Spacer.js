const Spacer = ({ size }) => {
    const getHeight = () => {
        switch (size) {
            case 'xxs':
                return '4px';
            case 'xs':
                return '8px';
            case 's':
                return '16px';
            case 'm':
                return '24px';
            case 'l':
                return '32px';
            case 'xl':
                return '48px';
            case 'xxl':
                return '80px';
            case 'xxxl':
                return '120px';
        }
    }

    return (
        <div style={{ height: getHeight() }} />
    )
}

export default Spacer;