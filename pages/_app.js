import App from 'next/app'
import Router from 'next/router'
import { UserProvider } from '../components/UserContext'

class MyApp extends App {
  componentDidMount() {
    if (window.location.pathname === '/go' || window.location.pathname === '/home' || window.location.pathname === 'login') {
      Router.push('/Login')
    }
    if (window.location.pathname === '/Feed') {
      Router.push('/feed')
    }
    if (window.location.pathname === '/Profile') {
      Router.push('/profile')
    }
    if (window.location.pathname === '/CreatePost') {
      Router.push('/createPost')
    }
    if (window.location.pathname === '/Friends') {
      Router.push('/friends')
    }
    if (window.location.pathname === '/musicblog') {
      Router.push('/TeganAndSara')
    }
    if (window.location.pathname === '/music') {
      Router.push('/TeganAndSara')
    }
  }

  render() {
    const { Component, pageProps } = this.props

    return <div className='main-content'>
      <UserProvider><Component {...pageProps} /></UserProvider></div>
  }
}

export default MyApp
