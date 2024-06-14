import React, { useState } from 'react'

import { LuSearch } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const [searchKeyword, setSearchKeyword] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        console.log(searchKeyword);
        if (searchKeyword) {
            navigate(`/search/${searchKeyword}`);
            setSearchKeyword('');
        }
    }

  return (

    <div className="wrap">
      <section className='home__text'>
        <div className="widget__wrap">
          <div className="textwidget">
            <h3>What kind of coffee do you want?</h3>
            <p>Find the coffee you want right now</p>
            <div className="search-box">
                <label htmlFor="searchInput"><LuSearch /></label>
                <input 
                type="text" 
                placeholder='Search'
                autoComplete='off'
                onChange={e => setSearchKeyword(e.target.value)}
                onKeyDown={e => {
                    if (e.key === 'Enter') {
                        handleSearch();
                    }
                }}
                
                />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
