import {fontOnDark, fontOnLight} from "@/utils/global";

const IconSearch = ({ theme = 'dark'}) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M16.6654 9.9987C16.6654 13.6806 13.6806 16.6654 9.9987 16.6654C6.3168 16.6654 3.33203 13.6806 3.33203 9.9987C3.33203 6.3168 6.3168 3.33203 9.9987 3.33203C13.6806 3.33203 16.6654 6.3168 16.6654 9.9987Z"
                stroke={theme === 'dark' ? fontOnDark : fontOnLight} strokeWidth="1.33" strokeLinecap="round"/>
            <path d="M15.1085 15.1094L20.6641 20.6649"
                  stroke={theme === 'dark' ? fontOnDark : fontOnLight} strokeWidth="1.33" strokeLinecap="round"/>
        </svg>

    )
}

export default IconSearch;