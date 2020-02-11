import React from 'react';
import './App.css';

import Routes from './routes/routes';
import Footer from './shared/footer';

function App() {
    return (
        <>
            <div style={{ minHeight: '100vh'}}>
                <Routes/>
            </div>

            <Footer/>
        </>
    );
}

export default App;