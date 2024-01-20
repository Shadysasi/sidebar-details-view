import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../Context/ThemeContext'
import {
  VideoListItem,
  VideoThumbnailImg,
  AboutContainer,
  VideoTitle,
  ChannelText,
  ViewsAndPublishedContainer,
} from './style'

const VideoItem = props => {
  const {movieDetails} = props
  const {
    channelName,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = movieDetails
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const year = formatDistanceToNow(new Date(publishedAt))
        return (
          <VideoListItem>
            <VideoThumbnailImg src={thumbnailUrl} alt="video thumbnail" />

            <AboutContainer>
              <VideoTitle darkMode={isDarkTheme}>{title}</VideoTitle>
              <ChannelText>{channelName}</ChannelText>
              <ViewsAndPublishedContainer>
                <ChannelText>{`${viewCount} views`}</ChannelText>
                <ChannelText>{`. ${year}`}</ChannelText>
              </ViewsAndPublishedContainer>
            </AboutContainer>
          </VideoListItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default VideoItem
