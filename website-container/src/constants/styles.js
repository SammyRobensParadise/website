import { Button, CircleButton, RightArrow, DownArrow } from 'eunoia'
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
export const ScrollArea = styled.div`
height: 700px;
overflow: auto;
::-webkit-scrollbar {
  display: none;
}
padding-block-end: 6vh;
`