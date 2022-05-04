import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")

  const baseUrl= "http://localhost:6001/listings"

  useEffect(() => {
    fetch(baseUrl)
      .then(r => r.json())
      .then(listData => setListings(listData));
  }, []);

  const handleDeleteListing = (selectedListing) => {
    console.log("deleted listing:", selectedListing)
    const filteredListings = listings.filter(listing => listing !== selectedListing)
    setListings(filteredListings)
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
    console.log(search)
  }

  const filterListings = listings.filter(listing => {
    console.log(listing, search)
    return listing.description.toLowerCase().includes(search.toLowerCase())
  })

  console.log(filterListings)

  return (
    <div className="app">
      <Header onSearch={handleSearch} search={search}/>
      <ListingsContainer 
        handleDeleteListing={handleDeleteListing} 
        listings={filterListings}
        baseUrl ={baseUrl}
        search={search}
      />
    </div>
  );
}

export default App;
