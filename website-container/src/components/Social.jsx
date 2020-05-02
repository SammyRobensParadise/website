import React from 'react'
import { UIStyle } from '../constants/config'
import styled from 'styled-components'
import { DribbbleIcon, GithubIcon, MediumIcon, LinkedinIcon } from 'eunoia'
import { dribbbleURL, githubURL, linkedinURL, mediumURL } from '../constants/links'
const SocialButtonsWrapper = styled.div`
  z-index: 1000;
  position: fixed;
  right: 6vh;
  top: 30vh;
  width: 70px;
`
const SocialMediaButtons = styled.a`
  cursor: pointer;
  padding-block-start: 6vh;
  display: flex;
  svg {
    filter: ${`drop-shadow(2px 2px 5px ${UIStyle.UIColors.darkGrey})`};
    transition: all 0.2s ease;
  }
  &:hover {
    svg {
      filter: ${`drop-shadow(2px 2px 5px ${UIStyle.UIColors.gold})`};
    }
  }
`
const SocialButtons = () => {
  return (
    <SocialButtonsWrapper>
      <SocialMediaButtons href={dribbbleURL}>
        <DribbbleIcon color={UIStyle.UIColors.white} scalingFactor={1} />
      </SocialMediaButtons>
      <SocialMediaButtons href={githubURL}>
        <GithubIcon color={UIStyle.UIColors.white} scalingFactor={1} />
      </SocialMediaButtons>
      <SocialMediaButtons href={mediumURL}>
        <MediumIcon color={UIStyle.UIColors.white} scalingFactor={1} />
      </SocialMediaButtons>
      <SocialMediaButtons href={linkedinURL}>
        <LinkedinIcon color={UIStyle.UIColors.white} scalingFactor={1} />
      </SocialMediaButtons>
    </SocialButtonsWrapper>
  )
}
export { SocialButtons }
