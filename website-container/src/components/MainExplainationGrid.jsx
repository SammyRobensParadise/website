import React from 'react'
import { Container, Grid } from '@material-ui/core'
import { UIStyle } from '../constants/config'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}))
const MainExplainationGrid = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <p className={classes.p}>xs=6</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <p className={classes.p}>xs=6</p>
        </Grid>
      </Grid>
    </div>
  )
}

export { MainExplainationGrid }
