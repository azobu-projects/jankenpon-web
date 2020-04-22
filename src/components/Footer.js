import React from 'react'

import styled from '@emotion/styled'

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  background: #000;
  color: #fff;
  padding: 1rem;
  & a {
    color: #fff;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <a href='https://en.wikipedia.org/wiki/Rock_paper_scissors'>
        Copyright © 2020 Azobu.
      </a>
    </FooterContainer>
  )
}

export default Footer
