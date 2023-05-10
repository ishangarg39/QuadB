import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Items from './components/Items';
import Details from './components/Details';

function App() {
  return (
    <Router>
         <h1>Movie Booking</h1>
          <Routes>
          <Route exact path="/" element={<Items/>}></Route>

            <Route exact path="/items/details" element={<Details/>}></Route>
            {/* <Route exact path="/Business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" country="us" pagesize={2} category="Business" />}></Route>
            <Route exact path="/Entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" country="us" pagesize={2} category="Entertainment" />}></Route>
            <Route exact path="/Health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" country="us" pagesize={2} category="Health" />}></Route>
            <Route exact path="/Science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" country="us" pagesize={2} category="Science" />}></Route>
            <Route exact path="/Sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" country="us" pagesize={2} category="Sports" />}></Route>
            <Route exact path="/Technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" country="us" pagesize={2} category="Technology" />}></Route> */}


          </Routes>
        </Router>
  );
}

export default App;
