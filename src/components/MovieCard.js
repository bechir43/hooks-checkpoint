import "./moviecard.css";
import StarRatingComponent from 'react-star-rating-component';
export default function MovieCard({ele}) {
    return (
        <div className="MovieCard">
                <div>
                    <div>
                    <img width="300" src={ele.img} alt="pic" />
                    </div>
                    <div >
                    <h2>{ele.title}</h2>
                    <p>{ele.description}</p>
                    <h3>Rate : {ele.rating}</h3>
                    <h4>{ele.posterURL}</h4>
                    <StarRatingComponent
        name="rate1"
        starCount={10}
        value={ele.rating}
       
      />
                    </div>
                </div>
            </div>
    )
}