import React from 'react'
import {
  withStyles,
  Typography,
} from '@material-ui/core'
import Section from 'ui/ui-elements/Section'

const Home = ({ classes }) => {
  return (
    <div id='app-wrapper' className={classes.appWrapper}>
      <section id='community' className={classes.sectionOuterWhite}>
        <Section id='community' color='gray'>
          <Typography variant='display1'>
            A Community
          </Typography>
        </Section>
      </section>
      <section id='school' className={classes.sectionOuterGray}>
        <section id='sectionInner-school' className={classes.sectionInner}>

        </section>
      </section>
    </div>
  )
}

const styles = {
  appWrapper: {
    backgroundColor: 'black',
    height: '100vh',
    width: '100vw',
  },



  sectionInnerGray: {
    backgroundColor: 'white',
    width: '80vw',
    minHeight: '100px',
    border: '1px green solid',
    margin: '0 auto',
  },
}

export default withStyles(styles)(Home)