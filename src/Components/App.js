import React from 'react';
import { Grid, Message } from 'semantic-ui-react';
import ColorPanel from './ColorPanel/ColorPanel';
import MetaPanel from './MetaPanel/MetaPanel';
import SidePanel from './SidePanel/SidePanel'
import Messages from './Messages/Messages'
import './App.css';

function App() {
  return (
    <Grid>
      <ColorPanel />
      <SidePanel />
      <Messages />
      <MetaPanel/>
    </Grid>
    )
}

export default App;
 