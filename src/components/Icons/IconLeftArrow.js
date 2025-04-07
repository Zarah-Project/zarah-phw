import {fontOnDark, fontOnLight} from "@/utils/global";

const IconLeftArrow = ({ theme = 'dark'}) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2622_14192)">
                <path d="M20 12.8005L4 12.8005M4 12.8005L9.33333 7.46712M4 12.8005L9.33333 18.1338"
                      stroke={(theme === 'dark' ? fontOnDark : fontOnLight)}
                      strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
                <clipPath id="clip0_2622_14192">
                    <rect width="24" height="24" fill="white" transform="translate(0 0.799805)"/>
                </clipPath>
            </defs>
        </svg>
    )
}

export default IconLeftArrow;