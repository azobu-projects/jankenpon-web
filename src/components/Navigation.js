import React from 'react'

import styled from '@emotion/styled'

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000;
  color: #fff;
  padding: 1rem;
  & a {
    color: #fff;
  }
`

const NavLogo = styled.h1`
  color: #fd3;
  font-weight: 900;
  margin: 0;
`

const NavItems = styled.p`
  margin: 0;
`

const NavItem = styled.span`
  margin: 0 0.5rem;
`

const Navigation = () => {
  return (
    <NavContainer>
      <NavLogo>じゃんけんぽん</NavLogo>
      <NavItems>
        <NavItem>Home</NavItem>
        <NavItem>Simple</NavItem>
        <NavItem>Fancy</NavItem>
      </NavItems>
    </NavContainer>
  )
}

export default Navigation
