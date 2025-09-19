import React from 'react';

export default function Header({ user, onLogout }) {
    return (
        <header className="app-header">
            <div className="container">
                <div className="header-left">
                    <h1>Budget Tracker</h1>
                    <p>Track income and expenses with insights</p>
                </div>
                <div className="header-right">
                    {user ? (
                        <>
                            <span style={{ color: 'var(--color-muted)' }}>Welcome, {user.name || 'User'}</span>
                            <button className="logout-button" onClick={onLogout}>Logout</button>
                        </>
                    ) : null}
                </div>
            </div>
        </header>
    );
}