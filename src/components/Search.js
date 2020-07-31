import React, {useState, useEffect} from 'react'


const Search = () => {

    const [data, setData] = useState({
        search: '',
        results: [],
        searched: false
    })

    const {search,results, searched} = data;

    const handleChange = name => event => {
        setData({ ...data, [name]: event.target.value, searched: false });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
    }

 return (
     <div className="text-center container">
         <form onSubmit={handleSubmit}>
            <span className="input-group-text">
               <div className="input-group input-group-lg">
               <input
                type="search"
                className="form-control"
                onChange={handleChange('search')}
                placeholder="Search by name"
                />
               </div>
               <div
               className="btn btn-input-group-append"
               style={{border:'none'}}
               >
              <button className="input-group-text">Search</button>
               </div>
            </span>
         </form>
     </div>
 )
}

export default Search;