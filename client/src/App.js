import { Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import Login from './components/Login'
import Home from './Home'
import ProtectedRoute from './components/ProtectedRoute'
import SlateEditor from './SlateEditor/SlateEditor'
import { useContext } from 'react'
import AuthContext from './context/AuthContext'
import ErrorPage from './components/ErrorPage'
import Permission from './components/Permission'
import Notifications from './components/Notifications'

function App() {

  const { loggedIn } = useContext(AuthContext)

  return (
    <>

      <Route path="/" component={HomePage} />
      
      {
        ( loggedIn === true || loggedIn === false ) && <Route path="/login" component={Login} />
      }


      {
        (loggedIn === true || loggedIn === false) && (
          <Route path="/view" exact component={SlateEditor} />
        )
      }

      {
        (loggedIn === true || loggedIn === false) && (
          <Route path="/new" exact component={SlateEditor} />
        )
      }

      {
        (loggedIn === true || loggedIn === false) && (
          <ProtectedRoute path="/dashboard" exact component={Home} />
        )
      }

      <Route path="/error" exact render={ (props) => <ErrorPage {...props} /> } />

      {
       <Route path="/permission" exact render={
          (props) => <Permission { ...props } />
        } />
      }

      {
        loggedIn === true && <Route path="/notifications" component={ Notifications } />
      }


    </>
  )
}

export default App