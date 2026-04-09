import App from 'next/app'
import Router from 'next/router'
import { UserProvider } from '../components/UserContext'

class MyApp extends App {
  componentDidMount() {
    if (window.location.pathname === '/musicblog') {
      Router.push('/CarlsCommentary')
    }
    if (window.location.pathname === '/music') {
      Router.push('/CarlsCommentary')
    }
  }

  render() {
    const { Component, pageProps } = this.props

    return <div className='main-content'>
      <UserProvider><Component {...pageProps} /></UserProvider></div>
  }
}

export default MyApp
