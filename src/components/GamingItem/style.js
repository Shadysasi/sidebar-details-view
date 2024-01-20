import styled from 'styled-components'

export const GameListItem = styled.li`
  width: 30%;
  margin-right: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`
export const ThumbnailImg = styled.img`
  width: 90%;
  margin-right: 30px;
`

export const AboutContainer = styled.div``
export const GameTitle = styled.h1`
  color: ${props => (!props.darkMode ? 'black' : '#ffffff')};
  font-size: 18px;
  font-size: 600;
`
export const ViewsText = styled.p`
  font-size: 16px;
  color: #64748b;
  margin: 5px 10px 0px 0px;
`
