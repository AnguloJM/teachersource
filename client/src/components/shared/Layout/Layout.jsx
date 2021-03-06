import React from "react";
import "./Layout.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

const Layout = (props) => (
  <div className="layout">
    <Header />
    <Nav />
    <div className="layout-children">{props.children}</div>
    <Footer />
  </div>
);

export default Layout;
