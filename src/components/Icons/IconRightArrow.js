import {fontOnDark, fontOnLight} from "@/utils/global";

const IconRightArrow = ({ theme = 'dark'}) => {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 15.9993H24M24 15.9993L18.6667 21.3327M24 15.9993L18.6667 10.666"
                  stroke={(theme === 'light' ? fontOnDark : fontOnLight)}
                  strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default IconRightArrow;