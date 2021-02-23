import React from 'react';
import './Suggestions.css';

function Suggestions() {
    return (
        <div className='wrapper'>
            <div className='heading'>
                <h2>Suggestions For You</h2>
            </div>

        <div className='see-all'>
        <h2>See All</h2>
        </div>

           
                <img src="/images/MrBeluga.jpg"className='Beluga'></img>
                <div className='suggestions-header-1'>
                    <h2>Mr. Beluga</h2>
                </div>
                <div className='suggestions-body-1'>
                    <p>New to Instagram</p>
                </div>
                <a href='#' className='follow-1'>Follow</a>
       
                <img src="/images/puppy.jpg"className='Puppy'></img>
                <div className='suggestions-header-2'>
                    <h2>Puppy</h2>
                </div>
                <div className='suggestions-body-2'>
                    <p>Followed by Mr. Beluga</p>
                </div>
                <a href='#' className='follow-2'>Follow</a>
           
                <img src="/images/concernedKitty.jpg" className='Kitty'></img>
                <div className='suggestions-header-3'>
                    <h2>Concerned Kitty</h2>
                </div>
                <div className='suggestions-body-3'>
                    <p>Is worried</p>
                </div>
                <a href='#' className='follow-3'>Follow</a>
            </div>
    
    )
}

export default Suggestions
