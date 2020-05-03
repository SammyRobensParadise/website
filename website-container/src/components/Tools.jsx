import React from 'react'
import { Grid, Container } from '@material-ui/core'
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
  padding-block-start: 10vh;
  @media screen and (max-width: 600px) {
    display: block;
  }
`
const NodeContainer = styled.div`
text-align: center;
  margin: 0 auto;
  display: block;
  padding-block-end: 6vh;
`
/**
 *
 * @param {Array} tools
 */
const Tools = ({ tools }) => {
  const classes = useStyles()
  //create lists
  let col0 = []
  let col1 = []
  let col2 = []
  let col3 = []
  for (let i = 0; i < tools.length; i += 4) {
    if (tools[i]) {
      col0.push(tools[i])
    }
  }
  for (let i = 1; i < tools.length; i += 4) {
    if (tools[i]) {
      col1.push(tools[i])
    }
  }
  for (let i = 2; i < tools.length; i += 4) {
    if (tools[i]) {
      col2.push(tools[i])
    }
  }
  for (let i = 3; i < tools.length; i += 4) {
    if (tools[i]) {
      col3.push(tools[i])
    }
  }
  return (
    <Wrapper>
        <Container>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12} sm={6} md={3}>
            {col0.map((it) => (
              <NodeContainer>{it}</NodeContainer>
            ))}
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            {col1.map((it) => (
              <NodeContainer>{it}</NodeContainer>
            ))}
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            {col2.map((it) => (
              <NodeContainer>{it}</NodeContainer>
            ))}
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            {col3.map((it) => (
              <NodeContainer>{it}</NodeContainer>
            ))}
          </Grid>
        </Grid>
      </div>
      </Container>
    </Wrapper>
  )
}

export { Tools }
