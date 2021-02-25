import React from 'react';
import './Suggestions.css';

const Suggestions = () => {
    return (
            <div className='suggestionContainer'>
                <h2 id='suggestionsTitle'>Suggestions For You</h2>  
                <h2 id='seeall'>See All</h2>
                <SuggestionExamples/>
            </div>
    )
}

const SuggestionExamples = () => {
    return(
                <div className='suggestionExamples'>
               <div className='imgs'>
                <img className='Beluga' src="/images/MrBeluga.jpg"></img>
                <img className='Puppy'  src="/images/puppy.jpg"></img>
                <img className='Kitty'  src="/images/concernedKitty.jpg" ></img>
            </div>

            <div className='suggestions'>
                <h2>Mr. Beluga</h2>
                <p id="post">New to Instagram</p>
                <h2>Puppy</h2>
                <p id="post">Followed by Mr. Beluga</p>
                <h2>Concerned Kitty</h2>
                <p id="post">Is worried</p>
                </div>
                <div className='follow'>
                    <p id="follow-1">Follow</p>
                    <p id="follow-2">Follow</p>
                    <p id="follow-3">Follow</p>
                </div>
            
         </div>
    )
}

export default Suggestions
