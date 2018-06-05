import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Parks from './components/Parks';
import Footer from './components/Footer';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
     uri: 'http://localhost:3003/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div id="main">
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
