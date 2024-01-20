import ThemeContext from '../../Context/ThemeContext'
import {
  GameListItem,
  ThumbnailImg,
  AboutContainer,
  GameTitle,
  ViewsText,
} from './style'

const GamingItem = props => {
  const {gameDetails} = props
  const {thumbnailUrl, title, viewCount} = gameDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <GameListItem>
            <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />

            <AboutContainer>
              <GameTitle darkMode={isDarkTheme}>{title}</GameTitle>

              <ViewsText>{`${viewCount} Watching Worldwide`}</ViewsText>
            </AboutContainer>
          </GameListItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default GamingItem
