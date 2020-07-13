import React, { Component } from 'react'
import { Menu} from 'semantic-ui-react'
import UserPanel from '../UserPanel/UserPanel'
import Channels from './Channels'
import { connect } from 'react-redux'
export class SidePanel extends Component {
  render() {
    const { currentUser } = this.props;
    return (
      <Menu 
        size="large"
        inverted
        fixed="left"
        vertical
        style={{ background: '#350d36', fontSize: '1.2rem' }}
      >
        <UserPanel /> 
        <Channels currentUser={currentUser}/>
      </Menu>
    )
  }
}
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})
export default connect(mapStateToProps)(SidePanel)
