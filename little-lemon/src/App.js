// import logo from './logo.svg';
// import './App.css';
// import Footer from "./Components/footer/Footer";
// import Header from "./Components/header/Header";
// import Main from "./Components/main/Main";
import {Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import "./style.css";

function App() {
  return (
    <>
    <Routes>
      <Route path = "/" element = "{<Homepage/>}"/>
    </Routes>
    </>
  );
}

export default App;
