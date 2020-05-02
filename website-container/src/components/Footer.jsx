import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { UIStyle } from '../constants/config'
import styled from 'styled-components'
import { Menu } from 'eunoia'
import { MenuConfig } from '../constants/config'

import '../css/styles/styles.css'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor: UIStyle.UIColors.darkGrey,
  },
}))

const Wrapper = styled.div`
  background-color: ${UIStyle.UIColors.darkGrey};
  padding-block-start: 10vh;
  @media screen and (max-width: 600px) {
    display: block;
  }
`
const FooterOptions = styled.a`
  padding-block-start: 8vh;
  text-align: center;
  margin: 0 auto;
  text-decoration: underline;
  display: table;
  padding-block-end: ${(p) => (p.isLast ? '8vh' : '2vh')};
  cursor: pointer;
  font-family: Helvetica Neue;
  letter-spacing: 0px;
  color: ${UIStyle.UIColors.white};
  font-weight: 400;
  font-size: 18px;
  transition: all 0.3s ease;
  &:hover {
    color: ${UIStyle.UIColors.gold};
    letter-spacing: 1px;
  }
`

const FirstNameLastName = `Coded with 💛by Sammy Robens-Paradise`
const Resume = `Resume`
const Connect = `Connect`
const Policy = `Policy`
const Footer = () => {
  const classes = useStyles()
  return (
    <Wrapper>
      <Menu config={MenuConfig.config} options={MenuConfig.options} />
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12} sm={12} md={4}>
            <div className="-footer-left-children">
              <FooterOptions>{Resume}</FooterOptions>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <div className="-footer-left-children">
              <FooterOptions>{FirstNameLastName}</FooterOptions>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <div className="-footer-right-children">
              <FooterOptions>{Connect}</FooterOptions>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <div className="-footer-bottom-policy">
              <FooterOptions isLast>{Policy}</FooterOptions>
            </div>
          </Grid>
        </Grid>
      </div>
    </Wrapper>
  )
}

export { Footer }