import React from 'react';

const RandomButton = ({handleQuote, color}) => {
    return (
        
            <button onClick={handleQuote} className='button' style={{color:color}}> Next </button>
        
    );
};

export default RandomButton;