import React, { useState } from 'react';
import quotes from '../quotes.json';
import RandomButton from './RandomButton';
import colors from '../colors';

const randomNumber=(max)=> Math.floor(Math.random() * max);

const Quotes = () => {
  
  const [quote, setquote] = useState(quotes[randomNumber(quotes.length)]);
  const background=colors[randomNumber(colors.length)]
  
  document.body.style=`background: ${background}`;
  
  const handleQuote=()=>{
    const index = randomNumber(quotes.length)
    setquote(quotes[index])
  }
  
    return (
        <div className='box'>
          <p className='quote' style={{color:background}}>"{quote.quote}"</p>
          <RandomButton handleQuote={handleQuote} className='button'/>
        </div>
    );
};

export default Quotes;