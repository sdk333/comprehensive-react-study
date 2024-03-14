function SearchBar () {
    return ( 
        <div>
            <input type="text" placeholder="Search..."/>
            <input type="checkbox" id="filter"/>
            <label for="filter">Only show products in stock</label>
        </div>
     );
}

export default SearchBar ;