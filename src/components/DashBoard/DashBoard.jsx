import React from 'react';
import NavBar from '../NavBar/NavBar';
import './DashBoard.css';

function Dashboard({ children }) {
    return (
        <div className="dashboard">
            <div className="dashboard__content">
                {children}
            </div>
        </div>
    );
}

export default Dashboard;
