import {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiFillHome, AiOutlineHome} from 'react-icons/ai'
import {HiOutlineFire, HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import ThemeContext from '../../Context/ThemeContext'
import {
  SidebarContainer,
  OptionContainer,
  OptionItem,
  OptionText,
  ContactUsContainer,
  Heading,
  SocialMediaIconContainer,
  SocialMediaIcon,
  Description,
} from './style'
import './index.css'

class SideBar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <SidebarContainer darkMode={isDarkTheme}>
              <OptionContainer>
                <Link to="/" className="option-link">
                  <OptionItem>
                    {isDarkTheme ? (
                      <AiFillHome size="18px" />
                    ) : (
                      <AiOutlineHome size="18px" />
                    )}
                    <OptionText darkMode={isDarkTheme}>Home</OptionText>
                  </OptionItem>
                </Link>

                <Link to="/trending">
                  <OptionItem>
                    {isDarkTheme ? (
                      <HiFire size="18px" />
                    ) : (
                      <HiOutlineFire size="18px" />
                    )}
                    <OptionText darkMode={isDarkTheme}>Trending</OptionText>
                  </OptionItem>
                </Link>

                <Link to="/gaming">
                  <OptionItem>
                    <SiYoutubegaming size="18px" />
                    <OptionText darkMode={isDarkTheme}>Gaming</OptionText>
                  </OptionItem>
                </Link>

                <Link to="/saved-videos">
                  <OptionItem>
                    <BiListPlus size="18px" />
                    <OptionText darkMode={isDarkTheme}>Saved Videos</OptionText>
                  </OptionItem>
                </Link>
              </OptionContainer>
              <ContactUsContainer darkMode={isDarkTheme}>
                <Heading>CONTACT US</Heading>
                <SocialMediaIconContainer>
                  <SocialMediaIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <SocialMediaIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <SocialMediaIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </SocialMediaIconContainer>
                <Description>
                  Enjoy! Now to see your channels and recommendations!
                </Description>
              </ContactUsContainer>
            </SidebarContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default SideBar
