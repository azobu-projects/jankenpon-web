import React from 'react'

import styled from '@emotion/styled'

import Navigation from './Navigation'
import Footer from './Footer'

const LayoutContainer = styled.div`
  background: #eee;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main`
  flex: 1;
  padding: 1rem;
`

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Navigation />

      <Main>{children}</Main>

      <Footer />
    </LayoutContainer>
  )
}

export default Layout
