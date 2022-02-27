import React from 'react';

const RandomButton = ({handleQuote}) => {
    return (
        <div>
            <button onClick={handleQuote}> siguiente</button>
        </div>
    );
};

export default RandomButton;