import styled from 'styled-components'

export const SidebarContainer = styled.div`
  min-height: 150vh;
  width: 18%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${props => (props.darkMode ? '#181818' : '#f9f9f9')};
  @media screen and (max-width: 567px) {
    display: none;
  }
`
export const OptionContainer = styled.ul`
  margin-top: 100px;
  margin-left: 0px;
  list-style-type: none;
`
export const OptionItem = styled.li`
  margin-bottom: 30px;
  text-decoration: 'none';
`

export const OptionText = styled.label`
  font-size: 18px;
  color: ${props => (props.darkMode ? '#f9f9f9' : '#181818')};
  margin-left: 20px;
`
export const ContactUsContainer = styled.div`
  color: ${props => (props.darkMode ? '#f9f9f9' : '#181818')};
`

export const Heading = styled.h1`
  font-size: 15px;
  padding-left: 20px;
`

export const SocialMediaIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 50px;
  margin: 0px 10px 0px 15px;
`
export const SocialMediaIcon = styled.img`
  width: 40px;
  height: 40px;
`
export const Description = styled.p`
  font-size: 15px;
  padding-left: 20px;
  position: static;
`
