// import of video files
import HomeVideo from "../../media/video/BackgroundFire.mp4";
import TimVideo from "../../media/video/TimVideo.mp4";
import LucianVideo from "../../media/video/ferns.mp4";

// import of video posters
import HomePoster from "../../media/images/videoPosters/HomePoster.png";
import LucianPoster from "../../media/images/videoPosters/LucianPoster.png";
import TimPoster from "../../media/images/videoPosters/TimPoster.png";

const backgroundData = [
  {
    key: 0,
    page: "/",
    video: HomeVideo,
    poster: HomePoster,
  },
  {
    key: 1,
    page: "/Tim",
    video: TimVideo,
    poster: TimPoster,
  },
  {
    key: 2,
    page: "/Lucian",
    video: LucianVideo,
    poster: LucianPoster,
  },
];

export default backgroundData;
