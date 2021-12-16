import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Link,
    Outlet
} from "react-router-dom";

import Navbar from './navbar';
import Content from './content';
import Topbar from './topbar';

function Admin() {
    return (
        // <div>
        //     <Topbar />
        //     <div id="layoutSidenav">
        //         <Navbar />
        //         <Content />
        //     </div>
        // </div>
        
        <Router>
            

            <Topbar/>
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                            <div className="sb-sidenav-menu">
                                <div className="nav">
                                    <div className="sb-sidenav-menu-heading">Core</div>
                                    <Link className="nav-link" to="/admin">
                                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                        Dashboard
                                    </Link>
                                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#calculator_link" aria-expanded="false" aria-controls="collapseLayouts">
                                        <div className="sb-nav-link-icon"><i className="fas fa-calculator"></i></div>
                                        Calculator
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </a>
                                    <div className="collapse" id="calculator_link" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <Link className="nav-link" to="/calculator">Volume Points Calculator</Link>
                                            <Link className="nav-link" to="/calculator/history">History</Link>
                                        </nav>
                                    </div>

                                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                        <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                        Product
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </a>
                                    
                                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                        <div className="sb-nav-link-icon"><i className="fas fa-user"></i></div>
                                        Client
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </a>
                                    <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                        <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                                Authentication
                                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                            </a>
                                            <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                                <nav className="sb-sidenav-menu-nested nav">
                                                    <a className="nav-link" href="login.html">Login</a>
                                                    <a className="nav-link" href="register.html">Register</a>
                                                    <a className="nav-link" href="password.html">Forgot Password</a>
                                                </nav>
                                            </div>
                                            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                                Error
                                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                            </a>
                                            <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                                <nav className="sb-sidenav-menu-nested nav">
                                                    <a className="nav-link" href="401.html">401 Page</a>
                                                    <a className="nav-link" href="404.html">404 Page</a>
                                                    <a className="nav-link" href="500.html">500 Page</a>
                                                </nav>
                                            </div>
                                        </nav>
                                    </div>
                                

                                </div>
                            </div>
                            <div className="sb-sidenav-footer">
                                <div className="small">Logged in as:</div>
                                Coach Batman
                            </div>
                        </nav>
                </div>
                <Routes>
                    <Route path="/admin" element={<Content/>}></Route>
                    <Route path="/calculator" element={<div id="layoutSidenav_content" className="py-5">Calculator</div>}></Route>
                    <Route path="/calculator/history" element={<div id="layoutSidenav_content">History</div>} ></Route>
                </Routes>
            </div>
        </Router>        
    );
}

export default Admin;

if (document.getElementById('admin')) {
    ReactDOM.render(<Admin />, document.getElementById('admin'));
}