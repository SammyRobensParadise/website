import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}))
const MainDoubleGrid = ({ leftChildren, rightChildren }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item sm={12} md={12}>
          {leftChildren
            ? leftChildren.map((children) => <div className="-left-children-2">{children}</div>)
            : null}
        </Grid>
        <Grid item sm={12} md={12}>
          {rightChildren
            ? rightChildren.map((children) => <div className="-right-children-2">{children}</div>)
            : null}
        </Grid>
      </Grid>
    </div>
  )
}

export { MainDoubleGrid}
