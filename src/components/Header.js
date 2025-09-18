import React from 'react';
import './Header.css';

export default function Header({ user, onLogout }) {
    return (
        <header className="app-header">
            <div className="header-left">
                <h1>Budget Tracker</h1>
                <p>Start tracking your expenses and income</p>
            </div>
            <div className="header-right">
                <p>Welcome, {user.name}</p>
                <button className="logout-button" onClick={onLogout}>Logout</button>
            </div>
        </header>
    );
}