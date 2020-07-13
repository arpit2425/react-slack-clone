import React, { Component } from 'react'
import { Dropdown, Grid, Header, Icon } from 'semantic-ui-react'
import firebase from '../../firebase';
export class UserPanel extends Component {
  dropdownOptions = () => [
    {
      key: "user",
      text: <span>Signed in as <strong>User</strong></span>,
      disabled: true
    },
    {
      key: 'avatar',
      text: <span>Change Avatar</span>
    },
    {
      key: 'signout',
      text: <span onClick={this.handleSignOut}>Sign out</span>
    }
  ];
  handleSignOut = () => {
    firebase
      .auth()
      .signOut()
    .then(()=>console.log("Signed out"))
    
  }
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
          <Header style={{ padding: "0.25em" }} as="h4" inverted>
            <Dropdown trigger={
            <span>User</span>
            } options={this.dropdownOptions()}/>
          </Header>
        </Grid.Column>
      </Grid>
        
    )
  }
}

export default UserPanel
