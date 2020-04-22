import React from 'react'

import styled from '@emotion/styled'

const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main`
  flex: 1;
  padding: 1rem;
`

const Footer = styled.footer`
  background: #000;
  color: #fff;
  padding: 1rem;
  & a {
    color: #fff;
  }
`

const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      <Main>{children}</Main>

      <Footer>
        <a href='https://en.wikipedia.org/wiki/Rock_paper_scissors'>
          Wikipedia
        </a>
      </Footer>
    </LayoutStyled>
  )
}

export default Layout
