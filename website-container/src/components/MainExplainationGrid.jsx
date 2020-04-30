import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { UIStyle } from '../constants/config'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}))
const MainExplainationGrid = ({ leftChildren, rightChildren }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item sm={12} md={6}>
          {leftChildren
            ? leftChildren.map((children) => <div className="-left-children">{children}</div>)
            : null}
        </Grid>
        <Grid item sm={12} md={6}>
          {rightChildren
            ? rightChildren.map((children) => <div className="-right-children">{children}</div>)
            : null}
        </Grid>
      </Grid>
    </div>
  )
}

export { MainExplainationGrid }