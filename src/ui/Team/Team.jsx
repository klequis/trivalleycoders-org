import React from 'react'
import {
  withStyles,
  Grid
} from '@material-ui/core'

/* User */
import Section from 'ui/ui-elements/Section'
import Member from './Member'
import { members } from './memberData'
import SectionTitle from 'ui/ui-elements/SectionTitle'
/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

const Team = ({ classes }) => {
  return (
    <Section
      id='team'
      spacing={24}
      justify='center'
    >
      <div className={classes.title}>
        <SectionTitle>
          Team
        </SectionTitle>
      </div>
      {
        members.map(m => {
          return (
            <Grid
              key={m.id}
              item
              // spacing={24}
              xs={12}
              sm={6}
              md={4}
              container
              justify='center'
            >
              <Member

                alt={m.name}
                paperWidth={150}
                src={m.picture}
                name={m.name}
                role={m.role}
                title={m.title}
                url={m.url}
                imageHeight={200}
                imageWidth={200}
              />
            </Grid>
          )
        })
      }

    </Section>
  )
}

const styles = {
  title: {
    width: '100%',
    marginTop: '10px',
  }
}

export default withStyles(styles)(Team)