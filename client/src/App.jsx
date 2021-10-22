import "./App.css"
import FormBack from "./components/FormBack";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import styled from "styled-components";
import Footer from "./components/Footer";
function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <div className="MainContainer">
            <Switch>
              <Route path="/" component={FormBack}/>
            </Switch>
          </div>

          <Footer/>
        </div>
      </BrowserRouter>
  );
}

export default App;



