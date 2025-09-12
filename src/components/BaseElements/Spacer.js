import {useMedia} from "react-use";

const Spacer = ({ size }) => {
    const isMobile = useMedia('(max-width: 800px)', true);

    const getHeight = () => {
        switch (size) {
            case 'xxs':
                return isMobile ? '2px' : '4px';
            case 'xs':
                return isMobile ? '4px': '8px';
            case 's':
                return isMobile ? '8px' : '16px';
            case 'm':
                return isMobile ? '12px' : '24px';
            case 'l':
                return isMobile ? '16px' : '32px';
            case 'xl':
                return isMobile ? '24px' : '48px';
            case 'xxl':
                return isMobile ? '40px' : '80px';
            case 'xxxl':
                return isMobile ? '60px' : '120px';
        }
    }

    return (
        <div style={{ height: getHeight() }} />
    )
}

export default Spacer;