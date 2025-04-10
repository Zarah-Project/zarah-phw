const Spacer = ({ size }) => {
    const getHeight = () => {
        switch (size) {
            case 'small':
                return '24px';
            case 'medium':
                return '32px';
            case 'large':
                return '48px';
            case 'xlarge':
                return '64px';
            case 'xxlarge':
                return '96px';
        }
    }

    return (
        <div style={{ height: getHeight() }} />
    )
}

export default Spacer;