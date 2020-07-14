import React, { Component } from 'react'
import { Button, Form, Icon, Input, Menu, Modal } from 'semantic-ui-react'
import firebase from '../../firebase';
export class Channels extends Component {
  state = {
    user:this.props.currentUser,
    channels: [],
    modal: false,
    channelDetails: "",
    channelsRef: firebase.database().ref('channels'),
    channelName:"",
    
  }
  componentDidMount() {
    this.addListener();
  }
  addListener = () => {
    let loadedChannel = [];
    this.state.channelsRef.on('child_added', snap => {
      loadedChannel.push(snap.val());
      this.setState({channels:loadedChannel})
    })
  }
  displayChannels = channels => (
    channels.length > 0 && channels.map(channel => (
      <Menu.Item
        key={channel.id}
        onClick={() => console.log(channel)}
        name={channel.name}
        style={{ opacity: 0.7 }}
        
      >
        # {channel.name}
      </Menu.Item>
  ))
  )
  addChannel = () => {
    const { channelsRef, channelDetails, channelName,user } = this.state;
    const key = channelsRef.push().key;
    const newChannel = {
      id: key,
      name: channelName,
      details: channelDetails,
      createdBy: {
        name: user.displayName,
        avatar: user.photoURL
      }
    };
    channelsRef
      .child(key)
      .update(newChannel)
      .then(() => {
        this.setState({
          channelName: "",
          channelDetails: ""
        });
        this.closeModal();
        console.log("Added channel");
         
      })
      .catch(err => {
        console.error(err)
      })

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
    {
      this.addChannel();
    }
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
        {this.displayChannels(channels)}
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
