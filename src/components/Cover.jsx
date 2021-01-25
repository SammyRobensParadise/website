import React from 'react'
import { Container } from '@material-ui/core'
import { UIStyle } from '../constants/config'
import styled from 'styled-components'
const ConverContainerImage = styled.div`
  width: auto;
  height: inherit;
  background: url('https://i.ibb.co/5n0rtsR/tumblr-p3l0u1-Qt-Mp1r2geqjo1-540.gif');
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;
`
const CoverContainer = styled.div`
  width: auto;
  height: 800px;
  background: ${UIStyle.UIColors.black};
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  opacity: 0.75;
  z-index: 2;
`
const ChildrenWrapper = styled.div`
  padding-block-start: 6vh;
`
const Cover = ({ children }) => {
  return (
    <ConverContainerImage className="cover-image">
      <CoverContainer>
        <Container disableGutters>
          <ChildrenWrapper>{children}</ChildrenWrapper>
        </Container>
      </CoverContainer>
    </ConverContainerImage>
  )
}
export { Cover }
