import React, { Fragment } from 'react';
import Recipe from './components/Recipe'

import Search from './components/Search'

const Home =  () => {
  return (
     
    <Fragment>
        <Search/>
        <br/>
        <h1 className="text-center">Food Recipes's</h1>
        <hr/>
        <div className="row">
        <Recipe/>
        </div>
    </Fragment>
    
  );
}

export default Home;
