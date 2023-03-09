import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavigationBar from "./file/NavigationBar";

import Home from './file/Home';
import Base from './file/base';
import About from "./file/About";
import Page3 from "./file/Page3";

function App() {
  return (
    <>
    <NavigationBar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path="/formula" element={<Base />}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/database" element={<Page3/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
