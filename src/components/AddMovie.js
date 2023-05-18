
import StarRatingComponent from 'react-star-rating-component';
import { useRef,useState } from "react";

export default function AddMovie({adding}) {

    let titleRef = useRef();
    let imgurlRef = useRef();
    let posurlRef = useRef();
    let descRef = useRef();
    let [rate, setRate] = useState(1);
    let rateRef=useRef()

    
    // const ratingChanged = (newRating) => {
    //     console.log(newRating);
    //     setRate(newRating);
    // };

    function submitted(ev){
        ev.preventDefault();

        let movieObject = {title:titleRef.current.value, img:imgurlRef.current.value, description:descRef.current.value, posterURL:posurlRef.current.value, rating:rate};
        adding(movieObject);

        //save all this information in localStorage
    }

    return (
        <div className="AddMovie">
            <form onSubmit={submitted}>

                <div className="row mb-3">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Title</label>
                    <div className="col-sm-10">
                    <input name="title" ref={titleRef} type="text" className="form-control" id="colFormLabel" placeholder="Title" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Image URL</label>
                    <div className="col-sm-10">
                    <input ref={imgurlRef} type="text" className="form-control" id="colFormLabel" placeholder="image url" />
                    </div>
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon3">Your Poter URL </span>
                    <input ref={posurlRef} type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                </div>

                <div className="input-group">
                    <span className="input-group-text">Description</span>
                    <textarea ref={descRef} className="form-control" aria-label="With textarea"></textarea>
                </div>

                <div className="rating">
                <h6> Rating :  </h6>
       <input type="range" min="1" max="10" step="1" ref={rateRef} id="rate" onChange={(e) => setRate(e.target.value)} />
               
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">ADD THE MOVIE</button>
                </div>
            </form>
        </div>
    )
}