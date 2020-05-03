import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { UIStyle } from '../constants/config'
import styled from 'styled-components'

const TitleStyle = styled.h1`
  text-align: left;
  font: Regular 52px/59px Georgia;
  letter-spacing: 0px;
  color: ${UIStyle.UIColors.white};
  opacity: 1 !important;
  font-weight: 200;
  padding-block-start: 180px;
  margin-left: 10%;
  font-size: 42px;
  width: auto;
  height: auto;
  line-height: 42px;
  margin-block-end: 0rem;
`
const SubtitleWrapper = styled.h2`
  text-align: left;
  font-family: Georgia;
  letter-spacing: 0px;
  color: ${UIStyle.UIColors.white};
  opacity: 1 !important;
  font-weight: 200;
  padding-block-start: 0px;
  padding-left: 10%;
  font-size: 64px;
  width: auto;
  margin-block-start: 0rem;
  @media screen and (max-width: 600px) {
    font-size: 50px;
  }
  @media screen and (max-width: 380px) {
    font-size: 30px;
  }
`
const ChildrenWrapper = styled.div`
  text-align: left;
  font: Regular 52px/59px Georgia;
  letter-spacing: 0px;
  color: ${UIStyle.UIColors.white};
  opacity: 1 !important;
  font-weight: 200;
  padding-block-start: 0px;
  padding-left: 10%;
  width: auto;
  margin-block-start: 0rem;
  & {
    @media screen and(max-width:500px) {
      font-size: 50px;
    }
  }
`
const SectionTitle = ({ title, subtitle, children }) => {
  return (
    <div>
      <Container>
        <Grid spacing={12}>
          <TitleStyle>{title}</TitleStyle>
          <SubtitleWrapper>
            {subtitle.map((item) => (
              <div className="-subtitle-header">{item}</div>
            ))}
          </SubtitleWrapper>
        </Grid>
      </Container>
      <Container>
        <Grid spacing={12}>
          {children.map((item) => (
            <ChildrenWrapper>
              <div className="-cover-children">{item}</div>
            </ChildrenWrapper>
          ))}
        </Grid>
      </Container>
    </div>
  )
}
export { SectionTitle }
