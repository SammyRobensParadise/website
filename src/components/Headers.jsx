import React from 'react'
import { SectionHeader } from 'eunoia'
import { Link } from 'react-router-dom'
import { HeaderContent, HeaderContentText, ActionCircleButton } from '../constants/styles'

export const Header = ({ config, contentText, children }) => (
  <SectionHeader config={config}>
    <div className={`-${config.text}-header`}>
      <HeaderContent>{config.text}</HeaderContent>
      {contentText ? <HeaderContentText>{contentText}</HeaderContentText> : null}
      <Link to={config.link}>
        <ActionCircleButton transparent aria-label={config.text} height={'66px'}>
          {children ? children : null}
        </ActionCircleButton>
      </Link>
    </div>
  </SectionHeader>
)
