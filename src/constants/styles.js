import { Button, CircleButton, RightArrow, DownArrow, UpArrow } from 'eunoia'
import styled from 'styled-components'
import { UIStyle } from './config'

export const ActionButton = styled(Button)`
  margin: 0;
  text-align: left;
  font: Regular 52px/59px Georgia;
  letter-spacing: 0px;
  color: ${UIStyle.UIColors.white};
  opacity: 1 !important;
  font-weight: 100;
  width: 200px;
  text-align: center;
`
export const ActionCircleButton = styled(CircleButton)`
  padding-top: 18px;
  display: inline-block;
  transform: translateY(20px);
`
export const ActionRightArrow = styled(RightArrow)`
  margin-bottom: 1rem;
`
export const ActionDownArrow = styled(DownArrow)`
  margin-bottom: 1rem;
`
export const ActionUpArrow = styled(UpArrow)`
  margin-bottom: 1rem;
`
export const HeaderContent = styled.div`
  margin: 0 auto;
  height: inherit;
  font-weight: 100;
  padding-top: ${(p) => (p.isThree ? '8vh' : '6vh')};
  & {
    @media screen and (max-width: 800px) {
      padding-top: 3vh;
      font-size: 24px;
    }
    @media screen and (max-width: 400px) {
      padding-top: 2vh;
    }
  }
`
export const ActionWrapper = styled.div`
padding-left: 4rem;
display: inline-block;
@media screen and (max-width: 770px) {
  padding-left: 0rem;
  display: block;
}
`

export const HeaderContentText = styled.p`
  font-family: Helvetica Neue;
  letter-spacing: 0px;
  color: ${UIStyle.UIColors.white};
  font-weight: 300;
  font-size: 24px;
  text-align: center;
  width: 60%;
  margin: 0 auto;
  padding-block-start: 2vh;
  @media screen and (max-width: 1350px) {
    width: 80%;
    font-size: 18px;
  }
`
export const ActionText = styled.h4`
display: inline-block;
font-family: Helvetica Neue;
letter-spacing: 0px;
color: ${UIStyle.UIColors.black};
font-weight: 400;
font-size: 26px;
`

export const ScrollArea = styled.div`
  height: ${(p) => (p.height ? p.height : '700px')};
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  padding-block-end: 6vh;
`
export const HeaderT = styled.h2`
  margin-block-start: 20vh;
  font-family: Georgia Regular;
  text-align: left;
  font-size: 64px;
  letter-spacing: 0px;
  font-weight: 200;
  color: ${UIStyle.UIColors.black};
  padding-left: 10%;
  @media screen and (max-width: 960px) {
    padding-left: 5%;
    margin-block-start: 15vh;
  }
  @media screen and (max-width: 460px) {
    font-size: 40px;
  }
`
export const Text = styled.p`
  font-family: Helvetica Neue;
  letter-spacing: 0px;
  color: ${UIStyle.UIColors.black};
  font-weight: 400;
  font-size: 26px;
  text-align: left;
  width: 82%;
  line-height: 55px;
  padding-left: 10%;
  @media screen and (max-width: 1260px) {
    line-height: 40px;
  }
  @media screen and (max-width: 960px) {
    padding-left: 5%;
  }
  @media screen and (max-width: 460px) {
    font-size: 18px;
  }
`