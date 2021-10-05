import React, { Component, Fragment, useState } from 'react'
import './App.css'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import  Search  from './components/users/Search'
import { Alert } from './components/layout/Alert'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { About } from './components/pages/About'
import User from './components/users/User'

import GithubState from './context/github/GithubState'

const App = () => {

  const [alert, setAlert] = useState(null)

  // async componentDidMount(){
  //   this.setState({loading: true})

  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

  //   this.setState({users:res.data, loading:false})
  // }



  // Get single Github user


  // Get user github repos


  // Clear users from state



  // Set Alert

  const showAlert = (msg, type) => {
    setAlert({msg, type})
    setTimeout(() => {
    setAlert(null)
    }, 5000);
  }
    return (
      <GithubState>
      <Router>
        <div className='App'>
          <Navbar title="Github Finder" icon="fab fa-github"/>
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route exact path='/' render={props => (
                <Fragment>
                  <Search  setAlert={showAlert} />
                  <Users />
                </Fragment>
              )} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login/' component={User}/>
            </Switch>
          </div>
        </div>
      </Router>
      </GithubState>

    )
}

export default App