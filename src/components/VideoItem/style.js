import styled from 'styled-components'

export const VideoListItem = styled.li`
  width: 90%;
  margin-right: 20px;
  margin-bottom: 20px;
  display: flex;
  margin-bottom: 30px;
`
export const VideoThumbnailImg = styled.img`
  width: 40%;
  margin-right: 30px;
`

export const AboutContainer = styled.div``
export const VideoTitle = styled.h1`
  color: ${props => (!props.darkMode ? 'black' : '#ffffff')};
  font-size: 18px;
  font-size: 600;
`
export const ChannelText = styled.p`
  font-size: 16px;
  color: #64748b;
  margin: 5px 10px 0px 0px;
`
export const ViewsAndPublishedContainer = styled.div`
  display: flex;
`
