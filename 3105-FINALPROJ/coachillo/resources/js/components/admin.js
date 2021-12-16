import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './navbar';
import Content from './content';
import Topbar from './topbar';

function Admin() {
    return (
        <div>
            <Topbar />
            <div id="layoutSidenav">
                <Navbar />
                <Content />
            </div>
        </div>
    );
}

export default Admin;

if (document.getElementById('admin')) {
    ReactDOM.render(<Admin />, document.getElementById('admin'));
}