import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {HiOutlineFire, HiFire} from 'react-icons/hi'

import Header from '../Header'
import SideBar from '../SideBar'
import FailureView from '../FailureView'
import VideoItem from '../VideoItem'
import ThemeContext from '../../Context/ThemeContext'

import {
  TrendingContainer,
  TrendingContentContainer,
  HeadContainer,
  IconContainer,
  Heading,
  VideoDetailsContainer,
} from './style'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    trendingList: [],
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/trending`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()

      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        profileImageUrl: eachVideo.channel.profile_image_url,
        channelName: eachVideo.channel.name,
      }))
      this.setState({
        trendingList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  retryButtonClicked = () => {
    this.getTrendingVideos()
  }

  renderSuccessView = () => {
    const {trendingList} = this.state

    return (
      <ThemeContext>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <HeadContainer darkMode={isDarkTheme}>
                <IconContainer darkMode={isDarkTheme}>
                  {isDarkTheme ? (
                    <HiFire size="25px" color="red" />
                  ) : (
                    <HiOutlineFire size="25px" color="red" />
                  )}
                </IconContainer>
                <Heading>Trending</Heading>
              </HeadContainer>
              <VideoDetailsContainer>
                {trendingList.map(eachItem => (
                  <VideoItem key={eachItem.id} movieDetails={eachItem} />
                ))}
              </VideoDetailsContainer>
            </>
          )
        }}
      </ThemeContext>
    )
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderTrendingStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return <FailureView retryButtonClicked={this.retryButtonClicked} />
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <Header />
              <TrendingContainer darkMode={isDarkTheme}>
                <SideBar />
                <TrendingContentContainer>
                  {this.renderTrendingStatus()}
                </TrendingContentContainer>
              </TrendingContainer>
            </>
          )
        }}
      </ThemeContext>
    )
  }
}

export default Trending
