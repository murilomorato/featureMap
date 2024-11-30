import React from 'react';
import Graph from '../components/Graph';
import './Home.css';

function Home() {
    return (
        <main className='main-container'>
            {/* <div className='main-side-bar'>
                <h1>barra lateral</h1>
            </div> */}
            <div className='main-content'>
                <Graph />
            </div>
        </main>
    );
}

export default Home;