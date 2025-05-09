import {fontOnDark, fontOnLight} from "@/utils/global";

const IconClose = ({ theme = 'dark'}) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.32812 5.33203L18.6615 18.6654M18.6615 5.33203L5.32812 18.6654"
                  stroke={(theme === 'dark' ? fontOnDark : fontOnLight)}
                  strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default IconClose;