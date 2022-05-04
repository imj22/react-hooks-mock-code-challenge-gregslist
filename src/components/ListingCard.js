import React, {useState} from "react";


function ListingCard({listing, listing: {description, image, location, id}, handleDeleteListing, baseUrl}) {
  const [selectedListing, setSelectedListing] = useState(listing)
  const [emoji, setEmoji] = useState("☆")
  const [favClass, setFavClass] = useState("emoji-button favorite")
  // const [isFav, setIsFav] = useState(false)

  // const isFavClicked = !isFav

  const handleClickFav = () => {
    setEmoji(emoji === "☆" ? "★" :"☆" )
      
      // isFavClicked? "☆" : "★"
    setFavClass(favClass === "emoji-button favorite"? "emoji-button favorite active" : "emoji-button favorite")
    // console.log("clicked!")
  }

  const handleDeleteClick = (e) => {
    // console.log(e.target.value, e.target)
    // handleDeleteListing(e.target.value)
     fetch(baseUrl + `/${id}`, {
       method: "DELETE",
     })
      .then(r => r.json())
      .then(deletedListing => setSelectedListing(deletedListing))
     handleDeleteListing(selectedListing)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        <button className={favClass} onClick={() => handleClickFav()}>{emoji}</button>
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={e => handleDeleteClick(e)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
