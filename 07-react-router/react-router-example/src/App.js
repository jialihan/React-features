import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import Directory from './components/Directory';


const HomePage = (props) => {
  console.log(props);
  return (<div>
    {/* <Link to='/profile'> Profile</Link>
    <h1>Jelly's Home Page</h1>
    <button onClick={() => {
      props.history.push('/profile')
    }}>
      navigate to Profile
    </button> */}
    <Directory />
  </div>)
}

const ProfilePage = (props) => {
  return (<div><h1>Jelly's Profile Page</h1>
    <Link to={`${props.match.url}/1`}>To Profile 1 </Link>
    <Link to={`${props.match.url}/2`}>To Profile 2 </Link>
    <Link to={`${props.match.url}3`}>To Profile 3 </Link>
  </div>);
}
const ProfileDetailPage = (props) => {
  console.log(props);
  return (<div><h1>Profile Detail Page: {props.match.params.profileId}</h1></div>)
}
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/profile' component={ProfilePage} />
        <Route path='/profile/:profileId' component={ProfileDetailPage} />
        <Route path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
