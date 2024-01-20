import {Link} from 'react-router-dom'
import {IoSunnyOutline} from 'react-icons/io5'
import {FaMoon} from 'react-icons/fa'
import LogoutPopup from '../LogoutPopup'
import ThemeContext from '../../Context/ThemeContext'
import {
  NavBarContainer,
  NavBar,
  WebsiteLogo,
  OptionContainer,
  ThemeButton,
  ProfileImage,
} from './style'

const Header = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onToggleTheme = () => {
        toggleTheme()
      }

      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      return (
        <NavBarContainer darkMode={isDarkTheme}>
          <NavBar>
            <Link to="/">
              <WebsiteLogo src={websiteLogo} alt="website logo" />
            </Link>
            <OptionContainer>
              <ThemeButton
                type="button"
                data-testid="theme"
                onClick={onToggleTheme}
              >
                {isDarkTheme ? (
                  <IoSunnyOutline color="white" size="25px" width="30%" />
                ) : (
                  <FaMoon size="25px" width="30%" />
                )}
              </ThemeButton>
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <br />
              <LogoutPopup />
            </OptionContainer>
          </NavBar>
        </NavBarContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default Header
