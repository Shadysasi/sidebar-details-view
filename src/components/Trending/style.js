import styled from 'styled-components'

export const TrendingContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.darkMode ? '#000000' : '#f9f9f9')};
  display: flex;
`
export const TrendingContentContainer = styled.div`
  min-height: 100px;
  width: 88%;
  margin-top: 80px;
`
export const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f4f4f4')};
  color: ${props => (!props.darkMode ? 'black' : '#ffffff')};
  padding: 20px 40px 20px 40px;
`
export const IconContainer = styled.div`
  background-color: ${props => (props.darkMode ? '#000000' : '#e2e8f0')};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 80px;
  border-radius: 80px;
`
export const Heading = styled.h1`
  font-size: 25px;
  margin-left: 20px;
`
export const VideoDetailsContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`
