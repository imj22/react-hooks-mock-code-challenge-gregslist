import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, handleDeleteListing, baseUrl, search}) {
  
  const listingsToDisplay = listings.map(listing => (
  <ListingCard 
    listing={listing} 
    key={listing.id}
    handleDeleteListing={handleDeleteListing}
    baseUrl ={baseUrl}
  /> ) )
  
  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {listingsToDisplay}
      </ul>
    </main>
  );
}

export default ListingsContainer;
