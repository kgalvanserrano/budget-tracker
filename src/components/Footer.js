import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      marginTop: 'var(--space-6)',
      padding: 'var(--space-5) 0',
      color: 'var(--color-muted)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <small>© {new Date().getFullYear()} Budget Tracker</small>
        <a href="https://kgalvan.dev" target="_blank" rel="noreferrer" className="btn btn-ghost" style={{ padding: '6px 10px' }}>
          kgalvan.dev
        </a>
      </div>
    </footer>
  );
}
