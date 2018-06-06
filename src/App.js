/**
 * @author ritesh patel
 * @description App component. Sets apollo client on a local host.
 */
import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// import components
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Parks from './components/Parks';
import Footer from './components/Footer';

// import app css
import './App.css';

// import apollo client / provider
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// set apollo client
const client = new ApolloClient({
     uri: 'http://localhost:3003/graphql'
})

class App extends Component {
  /**
   * @function renders app component
   */
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div id="main" className="container-fluid">
            <NavBar />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/parks" component={Parks} />
            <Footer />
          </div>
        </Router>      
      </ApolloProvider>
    );
  }
}

export default App;
