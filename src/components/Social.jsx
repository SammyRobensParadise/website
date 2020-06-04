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
  :hover,
  :focus {
    .tooltip {
      opacity: 1;
    }
  }
`
const SocialToolTip = styled.div`
  opacity: 0;
  height: 30px;
  font-size: 16px;
  font-family: Helvetica Neue;
  letter-spacing: 0px;
  line-height: 30px;
  background-color: ${UIStyle.UIColors.mediumGrey};
  color: ${UIStyle.UIColors.white};
  width: auto;
  position: fixed;
  right: 100px;
  padding: 5px 10px 5px 10px;
  border-radius: 8px;
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.75);
  transition: all 0.5s ease 0.3s;
`
const SocialButtons = () => {
  return (
    <SocialButtonsWrapper>
      <SocialMediaButtons aria-label="dribbble" href={dribbbleURL}>
        <SocialToolTip className="tooltip">Dribbble</SocialToolTip>
        <DribbbleIcon color={UIStyle.UIColors.white} scalingFactor={1} />
      </SocialMediaButtons>
      <SocialMediaButtons aria-label="github" href={githubURL}>
        <SocialToolTip className="tooltip">Github</SocialToolTip>
        <GithubIcon color={UIStyle.UIColors.white} scalingFactor={1} />
      </SocialMediaButtons>
      <SocialMediaButtons aria-label="medium" href={mediumURL}>
        <SocialToolTip className="tooltip">Medium</SocialToolTip>
        <MediumIcon color={UIStyle.UIColors.white} scalingFactor={1} />
      </SocialMediaButtons>
      <SocialMediaButtons aria-label="linkedin" href={linkedinURL}>
        <SocialToolTip className="tooltip">Linkedin</SocialToolTip>
        <LinkedinIcon color={UIStyle.UIColors.white} scalingFactor={1} />
      </SocialMediaButtons>
    </SocialButtonsWrapper>
  )
}

const StorySocialButtons = () => {
  return (
    <SocialButtonsWrapper>
      <SocialMediaButtons aria-label="dribbble" href={dribbbleURL}>
        <SocialToolTip className="tooltip">Dribbble</SocialToolTip>
        <DribbbleIcon color={UIStyle.UIColors.black} scalingFactor={1} />
      </SocialMediaButtons>
      <SocialMediaButtons aria-label="github" href={githubURL}>
        <SocialToolTip className="tooltip">Github</SocialToolTip>
        <GithubIcon color={UIStyle.UIColors.black} scalingFactor={1} />
      </SocialMediaButtons>
      <SocialMediaButtons aria-label="medium" href={mediumURL}>
        <SocialToolTip className="tooltip">Medium</SocialToolTip>
        <MediumIcon color={UIStyle.UIColors.black} scalingFactor={1} />
      </SocialMediaButtons>
      <SocialMediaButtons aria-label="linkedin" href={linkedinURL}>
        <SocialToolTip className="tooltip">Linkedin</SocialToolTip>
        <LinkedinIcon color={UIStyle.UIColors.black} scalingFactor={1} />
      </SocialMediaButtons>
    </SocialButtonsWrapper>
  )
}

export { SocialButtons, StorySocialButtons }
