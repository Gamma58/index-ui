import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useTheme } from 'react-neu'

import indexLogoFullBlack from 'assets/index-logo-full-black.png'
import indexLogoFullWhite from 'assets/index-logo-full-white.png'
import indexLogoBlack from 'assets/index-logo-black.png'
import indexLogoWhite from 'assets/index-logo-white.png'

const Logo: React.FC = () => {
  const { darkMode } = useTheme()
  let logo
  if (window.innerWidth > 450)
    logo = darkMode ? indexLogoFullWhite : indexLogoFullBlack
  else logo = darkMode ? indexLogoWhite : indexLogoBlack

  console.log(window.innerWidth)

  return (
    <StyledLogo to='/'>
      <StyledImage src={logo} alt='index-logo' />
    </StyledLogo>
  )
}

const StyledLogo = styled(Link)`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0;
  min-height: 44px;
  min-width: 44px;
  padding: 0;
  text-decoration: none;
`

const StyledImage = styled.img`
  height: 24px;
  min-width: 24px;
`

export default Logo
