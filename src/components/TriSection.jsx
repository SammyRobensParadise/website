import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { UIStyle } from '../constants/config'
import styled from 'styled-components'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor: UIStyle.UIColors.white,
  },
}))

const Wrapper = styled.div`
  padding-block-start: ${(p) => (p.noPadding ? '0vh' : '10vh')};
  @media screen and (max-width: 600px) {
    display: block;
  }
`

const TriSection = ({ leftChildren, middleChildren, rightChildren, noPadding }) => {
  const classes = useStyles()
  return (
    <Wrapper noPadding={noPadding}>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12} sm={12} md={4}>
            {leftChildren
              ? leftChildren.map((children) => <div className="-left-children">{children}</div>)
              : null}
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            {middleChildren
              ? middleChildren.map((children) => <div className="-left-children">{children}</div>)
              : null}
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            {rightChildren
              ? rightChildren.map((children) => <div className="-right-children">{children}</div>)
              : null}
          </Grid>
        </Grid>
      </div>
    </Wrapper>
  )
}

export { TriSection }
