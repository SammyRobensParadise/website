import React from 'react'
import { Container } from '@material-ui/core'
import { UIStyle } from '../constants/config'
import styled from 'styled-components'
const ConverContainerImage = styled.div`
  width: auto;
  height: inherit;
  background: url('https://i.ibb.co/xDFprr2/Background-Image.png');
  background-size: cover;
  background-repeat: no-repeat;
`
const CoverContainer = styled.div`
  width: auto;
  height: 900px;
  background: ${UIStyle.UIColors.black};
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  opacity: 0.84;
  top: 0;
`
const Cover = ({ children }) => {
  return (
    <ConverContainerImage className="cover-image">
      <CoverContainer>
        <Container disableGutters>{children}</Container>
      </CoverContainer>
    </ConverContainerImage>
  )
}
export { Cover }
