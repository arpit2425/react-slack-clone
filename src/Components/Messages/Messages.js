import React, { Component } from 'react';
import {Segment,Comment} from 'semantic-ui-react'

export class Messages extends Component {
  render() {
    return (
      <>
        <Segment>
          <Comment.Group className="messages">
          </Comment.Group>
        </Segment>
        </>
    )
  }
}

export default Messages
