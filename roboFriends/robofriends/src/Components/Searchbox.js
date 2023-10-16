import React from 'react';

const Searchbox = ({searchChange, searchfield}) => {
    return (
        <div>
            <input className='pa-3 ba b--green bg-lightest-blue' type='search' placeholder='searchbox' onChange={searchChange}/> 
        </div>
    );
}

export default Searchbox;