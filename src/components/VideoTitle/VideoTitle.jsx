import './VideoTitle.scss';

const VideoTitle = ({title, overview}) => {
    return (
        <div className="video-title">
            <h1>{title}</h1>
            <p>{overview}</p>
            <button>
                <i className="fa-solid fa-play"></i>
                Play
            </button>
            <button>
                <i className="fa-solid fa-circle-info"></i>
                More Info
            </button>
        </div>
    )
}

export default VideoTitle;