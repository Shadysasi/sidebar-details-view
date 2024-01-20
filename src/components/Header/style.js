import styled from 'styled-components'

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
  background-color: ${props => (props.darkMode ? '#181818' : '#ffffff')};
  width: 100%;
  padding: 15px;
  position: fixed;
  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 98%;
`
export const WebsiteLogo = styled.img`
  width: 40%;
`
export const OptionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 15%;
  height: 50px;
`
export const ThemeButton = styled.button`
  background-color: transparent;
  border: 0px;
  cursor: pointer;
`
export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
`
