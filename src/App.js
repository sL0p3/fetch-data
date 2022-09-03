import './App.css';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
// import LoadingBar from 'react-top-loading-bar'
import Form from './components/Form'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router>
      <Navbar />
      {/* <LoadingBar
      color='#f11946'
      /> */}
      <Routes>
        <Route exact path="/" element = {<Cards  key="home" />} />
        <Route exact path="/form" element = {<Form key="form" />} />
      </Routes>
      <Footer />
      </Router>
    </div>
  )
}

export default App;
