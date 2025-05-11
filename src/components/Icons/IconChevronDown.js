import {fontOnDark, fontOnLight} from "@/utils/global";

const IconCalendar = ({ theme = 'dark'}) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2898_12735)">
                <g clipPath="url(#clip1_2898_12735)">
                    <path
                        d="M5.33317 8.66663L10.1142 13.4477C11.0031 14.3366 11.4476 14.781 11.9998 14.781C12.5521 14.781 12.9966 14.3366 13.8855 13.4477L18.6665 8.66663"
                        stroke={(theme === 'dark' ? fontOnDark : fontOnLight)}
                        strokeWidth="1.33"
                        strokeLinecap="round"
                        strokeLinejoin="round"/>
                </g>
            </g>
            <defs>
                <clipPath id="clip0_2898_12735">
                    <rect width="24" height="24" fill={(theme === 'dark' ? fontOnDark : fontOnLight)}/>
                </clipPath>
                <clipPath id="clip1_2898_12735">
                    <rect width="24" height="24" fill={(theme === 'dark' ? fontOnDark : fontOnLight)} transform="translate(24 24) rotate(180)"/>
                </clipPath>
            </defs>
        </svg>
    )
}

export default IconCalendar;