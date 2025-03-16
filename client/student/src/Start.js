import React from 'react';
import ReactDOM from 'react-dom';
import './start.css';

// Tạo component Navbar
function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="navbar-title">Hệ Thống Quản Lý Hoạt Động Khoa Học và Công Nghệ</h1>
            <button className="login-button">Đăng nhập</button>
        </nav>
    );
}

// Tạo component Background
function Background() {
    return (
        <div className="background">
            <h2>Welcome to the Management System</h2>
            <p>Quản lý hoạt động khoa học và công nghệ một cách hiệu quả.</p>
        </div>
    );
}

// Tạo component App
function App() {
    return (
        <div className="app">
            <Navbar />
            <Background />
        </div>
    );
}

// Render component App vào #root element
ReactDOM.render(<App />, document.getElementById('root'));
