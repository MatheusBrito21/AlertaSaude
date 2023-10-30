import React from 'react';
import { Carousel } from 'antd';
import './Home.css';

const contentStyle = {
    height: '300px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    padding: '10px'
};


const App = () => (
    <div className="carrossel">
        <Carousel effect="fade">
            <div className='img1'>
                
            </div>
            <div>
                <h3 style={contentStyle}>2</h3>
            </div>
            <div>
                <h3 style={contentStyle}>3</h3>
            </div>
            <div>
                <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>
    </div>
);
export default App;