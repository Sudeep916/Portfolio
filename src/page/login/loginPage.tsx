import React from 'react'
import LoginContainer from '../../container/login/LoginContainer'
import PortfolioHeader from '../../component/header/Header'
import PortfolioFooter from '../../component/footer/Footer'

const LoginPage = () => {
  return (
    <><PortfolioHeader/>
        <LoginContainer />
      <PortfolioFooter/>
    </>
  )
}

export default LoginPage;