import React, { Component } from 'react'
import {Grid,Header,Icon } from 'semantic-ui-react'
export class UserPanel extends Component {
  render() {
    return (
      <Grid style={{ background: '#350d36' }}>
        <Grid.Column>
          <Grid.Row style={{ padding: '1.2em', margin: 0 }}>
            <Header inverted floated="left" as="h2">
              <Icon name="code"></Icon>
              <Header.Content>MyChat</Header.Content>
            </Header>
            
          </Grid.Row>
        </Grid.Column>
      </Grid>
        
    )
  }
}

export default UserPanel
