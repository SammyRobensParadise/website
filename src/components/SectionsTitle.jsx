import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { UIStyle } from '../constants/config'
import styled from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const TitleStyle = styled.h1`
  text-align: center;
  font: Regular 52px/59px Georgia;
  letter-spacing: 0px;
  color: ${(p) => (p.story ? UIStyle.UIColors.black : UIStyle.UIColors.white)};
  opacity: 1 !important;
  font-weight: 200;
  padding-block-start: ${(p) => (p.story ? '10px' : '180px')};
  font-size: 64px;
  width: auto;
  height: auto;
  line-height: 48px;
  margin-block-end: 0rem;
  @media screen and (max-width: 900px) {
    line-height: 60px;
  }
`
const SubtitleWrapper = styled.h2`
  text-align: center;
  font-family: Georgia;
  letter-spacing: 0px;
  color: ${(p) => (p.story ? UIStyle.UIColors.black : UIStyle.UIColors.white)};
  opacity: 1 !important;
  font-weight: 200;
  padding-block-start: 18px;
  font-size: 42px;
  width: auto;
  margin-block-start: 0rem;
  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
  @media screen and (max-width: 380px) {
    font-size: 26px;
  }
`
const ChildrenWrapper = styled.div`
  text-align: center;
  font: Regular 52px/59px Georgia;
  letter-spacing: 0px;
  color: ${(p) => (p.story ? UIStyle.UIColors.black : UIStyle.UIColors.white)};
  opacity: 1 !important;
  font-weight: 200;
  padding-block-start: 30px;
  width: auto;
  margin-block-start: 0rem;
  & {
    @media screen and(max-width:500px) {
      font-size: 50px;
    }
  }
`
const CoverImageContainer = styled.div`
  padding-block-start: 2vh;
  text-align: center;
`
const CoverImage = styled(LazyLoadImage)`
  text-align: center;
  height: 40vh;
  width: auto;
  object-fit: contain;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`

const SectionTitle = ({ title, subtitle, children, story, coverImageURL, coverImageAltText }) => {
  return (
    <div>
      <Container>
        <Grid spacing={10}>
          {coverImageURL ? (
            <CoverImageContainer>
              <CoverImage
                effect="blur"
                src={coverImageURL}
                alt={coverImageAltText ? coverImageAltText : 'cover-image'}
              />
            </CoverImageContainer>
          ) : null}
          <TitleStyle story={story}>{title}</TitleStyle>
          <SubtitleWrapper story={story}>
            {subtitle.map((item) => (
              <div className="-subtitle-header">{item}</div>
            ))}
          </SubtitleWrapper>
        </Grid>
      </Container>
      <Container>
        <Grid spacing={12}>
          {children.map((item) => (
            <ChildrenWrapper story={story}>
              <div className="-cover-children">{item}</div>
            </ChildrenWrapper>
          ))}
        </Grid>
      </Container>
    </div>
  )
}
export { SectionTitle }
