import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './Components/App';
import Spinner from './Spinner';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import firebase from './firebase';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import rootReducer from './reducer';
import { setUser, clearUser } from './actions';
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(rootReducer, composeWithDevTools());
const Root = (props) => {
  const histroy = useHistory();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
      props.setUser(user)
        histroy.push('/');
      }
      else {
        histroy.push('/login')
        props.clearUser();
      }
    });
  },[]);

  return props.isLoading ? ( 
    <Spinner />
  ) : (
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  );
};
const mapStateToProps = (state) => ({
isLoading:state.user.isLoading,
})
;
const RootWith = connect(mapStateToProps, { setUser, clearUser })(Root);
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <RootWith />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
