import React, { Component } from 'react'
import {Button, Form, Icon, Input, Menu, Modal} from 'semantic-ui-react'
export class Channels extends Component {
  state = {
    channels: [],
    modal: false,
    channelDetails:"",
    channelName:"",
    
  }
  closeModal = () => {
    this.setState({
      modal:false
    })
  }
  openModal = () => {
    this.setState({
      modal:true
    })
  }
  handleChange = event => {
    this.setState({
    [event.target.name]:event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault();
    if (this.isValid(this.state))
    console.log("channel submit")
  }
  isValid = ({ channelName, channelDetails }) => channelName && channelDetails;
  render() {
    const { channels, modal } = this.state;
    return (<>
   
      <Menu.Menu style={{ paddingBottom: '2em' }}>
        <Menu.Item>
          <span>
            <Icon name="exchange"/>Channels
          </span>{" "}
          ({channels.length})<Icon name="add" onClick={this.openModal}/>
        </Menu.Item>
      </Menu.Menu>
      <Modal basic open={modal} onClose={this.closeModal}>
        <Modal.Header>Add a channel</Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <Input
                fluid
                label="Name of channel"
                name="channelName"
                onChange={this.handleChange}
                />
            </Form.Field>
            <Form.Field>
              <Input
                fluid
                label="About the channel"
                name="channelDetails"
                onChange={this.handleChange}
              />
            </Form.Field>
          </Form>
        </Modal.Content> 
        <Modal.Actions>
          <Button color="green" inverted onClick={this.handleSubmit}>
            <Icon name="checkmark"/>Add
          </Button>
          <Button color="red" inverted onClick={this.closeModal}>
            <Icon name="remove" />Cancel
          </Button>
        </Modal.Actions>
      </Modal>
          </>
    )
  }
}

export default Channels
