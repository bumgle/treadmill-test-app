import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Layout from '../../components/Layout'

import Dashboard from '../../containers/Dashboard'
import Entertainment from '../../containers/Entertainment'
import EntertainmentSelect from '../../containers/EntertainmentSelect'

export default () => (
  <Router>
    <Layout>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/entertainment" component={Entertainment} />
        <Route path="/entertainment-select" component={EntertainmentSelect} />
      </Switch>
    </Layout>
  </Router>
)
