import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./Create";
import Details from "./Details";
import Footer from "./Footer";
import Nav from "./Nav";
import Posts from "./Posts";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Posts />}></Route>
          <Route path="/read/:id" element={<Details />}></Route>
          <Route path="/newBlogs" element={<Create />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
