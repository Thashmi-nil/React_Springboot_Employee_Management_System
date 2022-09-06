import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import { Navbar } from './components/LandingPage/Navbar';
import { Header } from './components/LandingPage/Header';
import Registration from './components/RegistrationPage/RegistrationPage';
import Login from './components/LoginPage/LoginPage';
import Analytics from './components/Analytics/Analytics';
import Report from './components/ReportPage/ReportPage';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/registration" component={Registration}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/employees" component={ListEmployeeComponent}></Route>
            <Route path="/add-employee/:id" component={CreateEmployeeComponent}></Route>
            <Route path="/view-employee/:id" component={ViewEmployeeComponent}></Route>
            <Route path="/analytics" component={Analytics}></Route>
            <Route path="/report" component={Report}></Route>

            {/* <Route path="/update-employee/:id" component={UpdateEmployeeComponent}></Route> */}

          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

const Home = () => (
  <div>
    <Navbar />
    <Header />

  </div>
)


export default App;
