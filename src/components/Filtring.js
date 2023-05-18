import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
const Filtring = ({ getWord, getRate, rating }) => {
    const onStarClick = (nextValue) => {
        getRate(nextValue);
      };
  return (
    <div>
      <form className="searchform">
        <h3> FILTER BAR </h3>
        <input
          type="text"
          placeholder="search"
          onChange={(el) => getWord(el.target.value)}
        />
        {console.log(getWord)}
        <button className="btn btn-primary searchbtn" type="submit">
          Search
        </button>
      </form>
      <StarRatingComponent
        name="rate1"
        starCount={10}
        value={rating}
        onStarClick={onStarClick}
      />
    </div>
  )
}

export default Filtring
