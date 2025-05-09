import {fontOnDark, fontOnLight} from "@/utils/global";

const IconList = ({ theme = 'dark'}) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.99609 6.00195H20.6628M7.99609 12.002H20.6628M7.99609 18.002H20.6628"
                  stroke={(theme === 'dark' ? fontOnDark : fontOnLight)}
                  strokeWidth="1.33" strokeLinecap="round"/>
            <path
                d="M3.77344 5.11328L4.66233 6.00217L3.77344 6.89106M3.77344 11.1133L4.66233 12.0022L3.77344 12.8911M3.77343 17.1133L4.66232 18.0022L3.77343 18.8911"
                stroke={(theme === 'dark' ? fontOnDark : fontOnLight)} strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default IconList;