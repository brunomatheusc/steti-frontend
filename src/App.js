import React from 'react';
import './App.css';
import Routes from './routes/routes';
import Footer from './shared/footer';

function App() {
    return (
        <>
            <div className="App" style={{ minHeight: '90vh'}}>
                <Routes/>
            </div>

            <Footer/>
        </>
    );
}

export default App;