import React from 'react'
import { SectionHeader } from 'eunoia'
import {
  HeaderContent,
  HeaderContentText,
  ActionCircleButton,
} from '../constants/styles'

 export const Header = ({ config, contentText, children }) => (
  <SectionHeader config={designHeaderConfigBottom}>
    <div className={`-${config.text}-header`}>
      <HeaderContent>{config.text}</HeaderContent>
      {contentText ? <HeaderContentText>{contentText}</HeaderContentText> : null}
      <ActionCircleButton transparent height={'66px'}>
        {children ? children : null}
      </ActionCircleButton>
    </div>
  </SectionHeader>
)
