import React from 'react'
import { UIStyle } from '../constants/config'
import styled from 'styled-components'
import { DribbbleIcon, GithubIcon, MediumIcon, LinkedinIcon } from 'eunoia'
import { dribbbleURL, githubURL, linkedinURL, mediumURL } from '../constants/links'
const SocialButtonsWrapper = styled.div`
  z-index: 1000;
  position: fixed;
  right: 2vh;
  top: 30vh;
  width: 70px;
  @media screen and (max-width: 500px) {
    transform: scale(0.8);
    right: 0vh;
    top: 0vh;
    width: 60px;
  }
`
const SocialMediaButtons = styled.a`
  cursor: pointer;
  padding-block-start: 6vh;
  display: flex;
  svg {
    filter: ${`drop-shadow(2px 2px 5px ${UIStyle.UIColors.mediumGrey})`};
    transition: all 0.2s ease;
  }
  &:hover {
    svg {
      filter: ${`drop-shadow(2px 2px 5px ${UIStyle.UIColors.black})`};
    }
  }
`
const SocialButtons = () => {
  return (
    <SocialButtonsWrapper>
      <SocialMediaButtons aria-label="dribbble" href={dribbbleURL}>
        <DribbbleIcon color={UIStyle.UIColors.white} scalingFactor={1} />
      </SocialMediaButtons>
      <SocialMediaButtons aria-label="github" href={githubURL}>
        <GithubIcon color={UIStyle.UIColors.white} scalingFactor={1} />
      </SocialMediaButtons>
      <SocialMediaButtons aria-label="medium" href={mediumURL}>
        <MediumIcon color={UIStyle.UIColors.white} scalingFactor={1} />
      </SocialMediaButtons>
      <SocialMediaButtons aria-label="linkedin" href={linkedinURL}>
        <LinkedinIcon color={UIStyle.UIColors.white} scalingFactor={1} />
      </SocialMediaButtons>
    </SocialButtonsWrapper>
  )
}

const StorySocialButtons = () => {
  return (
    <SocialButtonsWrapper>
      <SocialMediaButtons aria-label="dribbble" href={dribbbleURL}>
        <DribbbleIcon color={UIStyle.UIColors.black} scalingFactor={1} />
      </SocialMediaButtons>
      <SocialMediaButtons aria-label="github" href={githubURL}>
        <GithubIcon color={UIStyle.UIColors.black} scalingFactor={1} />
      </SocialMediaButtons>
      <SocialMediaButtons aria-label="medium" href={mediumURL}>
        <MediumIcon color={UIStyle.UIColors.black} scalingFactor={1} />
      </SocialMediaButtons>
      <SocialMediaButtons aria-label="linkedin" href={linkedinURL}>
        <LinkedinIcon color={UIStyle.UIColors.black} scalingFactor={1} />
      </SocialMediaButtons>
    </SocialButtonsWrapper>
  )
}

export { SocialButtons, StorySocialButtons }
