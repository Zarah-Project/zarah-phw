import {CircleLoader} from "react-spinners";

const Loading = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px', color: '#3F0E14'}}>
            <CircleLoader />
        </div>
    )
}

export default Loading;