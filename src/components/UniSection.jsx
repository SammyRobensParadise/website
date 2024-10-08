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
  padding-block-start: 2vh;
  @media screen and (max-width: 600px) {
    display: block;
  }
`

const UniSection = ({ middleChildren }) => {
  const classes = useStyles()
  return (
    <Wrapper>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            {middleChildren
              ? middleChildren.map((children) => <div className="-middle-children">{children}</div>)
              : null}
          </Grid>
        </Grid>
      </div>
    </Wrapper>
  )
}

export { UniSection }
