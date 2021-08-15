import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from '@pages/Login'
import Dashboard from '@pages/Dashboard'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  )
}
