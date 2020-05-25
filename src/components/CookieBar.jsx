import React, { useState } from 'react'
import { UIStyle } from '../constants/config'
import styled from 'styled-components'
import { useCookies } from 'react-cookie'
import { emailLink } from '../constants/links'
import '../css/styles/styles.css'
import '../css/styles/App.css'

const Wrapper = styled.div`
  position: fixed;
  bottom: 0px;
  height: 100px;
  width: 100%;
  background-color: ${UIStyle.UIColors.white};
  display: ${(p) => (p.shoudRender ? 'inherit' : 'none')};
  box-shadow: 0px -4px 40px -17px rgba(0, 0, 0, 0.75);
  overflow-x: hidden;
  overflow-y: hidden;
`
const Text = styled.p`
  font-family: Helvetica Neue;
  letter-spacing: 0px;
  color: ${UIStyle.UIColors.black};
  font-weight: 400;
  font-size: 22px;
  text-align: center;
  line-height: 50px;
  @media screen and (max-width: 1260px) {
    line-height: 40px;
  }
  @media screen and (max-width: 460px) {
    font-size: 18px;
  }
`
const Close = styled.button`
  position: absolute;
  right: 32px;
  top: 10px;
  width: 32px;
  height: 32px;
  opacity: 0.5;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 33px;
    width: 2px;
    background-color: ${UIStyle.UIColors.black};
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`
const A = styled.a`
  text-decoration: underline;
  color: ${UIStyle.UIColors.black};
  transition: all 0.3s ease;
  &:hover {
    color: ${UIStyle.UIColors.gold};
    letter-spacing: 0.5px;
  }
`

const CookieBar = () => {
  const [shoudRender, setRenderState] = useState(true)
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies(['hide_cookie_bar_on_closure'])
  const handleClosure = () => {
    let targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 10)
    setRenderState(false)
    setCookie('hide_cookie_bar_on_closure', 'true', {
      path: '/',
      expires: targetDate,
    })
  }
  return (
    <Wrapper shoudRender={shoudRender}>
      <Text>
        <Close onClick={handleClosure} />
        Some{' '}
        <span role="img" aria-label="cookie-emoji">
          🍪
        </span>
        ’s say you’ve been here before <A href={emailLink}>Reach out and let’s connect!</A>
      </Text>
    </Wrapper>
  )
}

export default CookieBar
