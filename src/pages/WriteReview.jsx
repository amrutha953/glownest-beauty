import React, { useState } from "react";
import "../styles/WriteReview.css";


function WriteReview() {


  const [rating, setRating] = useState(0);


  const [reviews, setReviews] = useState(
    JSON.parse(localStorage.getItem("reviews")) || []
  );


  const [review, setReview] = useState({

    name:"",
    email:"",
    message:""

  });



  const handleChange = (e)=>{

    setReview({

      ...review,
      [e.target.name]:e.target.value

    });

  };



  const handleSubmit=(e)=>{

    e.preventDefault();


    const newReview = {

      ...review,
      rating

    };


    const updatedReviews = [
      ...reviews,
      newReview
    ];


    setReviews(updatedReviews);


    localStorage.setItem(
      "reviews",
      JSON.stringify(updatedReviews)
    );



    setReview({

      name:"",
      email:"",
      message:""

    });


    setRating(0);


    alert("Thank you for your review ❤️");

  };



  return (

    <div className="write-review-page">


      <section className="review-banner">

        <span>
          CUSTOMER EXPERIENCE
        </span>


        <h1>
          Share Your Glow With GlowNest
        </h1>


        <p>
          Your feedback helps beauty lovers discover
          trusted skincare, makeup and self-care products.
        </p>

      </section>





      <section className="review-form-section">


        <form
          className="review-form"
          onSubmit={handleSubmit}
        >


          <h2>
            Write Your Review
          </h2>


          <label>
            Your Name
          </label>


          <input

            type="text"

            name="name"

            placeholder="Enter your name"

            value={review.name}

            onChange={handleChange}

            required

          />



          <label>
            Email Address
          </label>


          <input

            type="email"

            name="email"

            placeholder="Enter your email"

            value={review.email}

            onChange={handleChange}

            required

          />



          <label>
            Your Rating
          </label>



          <div className="rating-box">

            {[1,2,3,4,5].map((star)=>(

              <span

                key={star}

                onClick={()=>setRating(star)}

                className={
                  star <= rating
                  ? "active-star"
                  : ""
                }

              >

                ★

              </span>

            ))}

          </div>




          <label>
            Your Experience
          </label>


          <textarea

            name="message"

            placeholder="Tell us about your experience..."

            value={review.message}

            onChange={handleChange}

            required

          />



          <button type="submit">

            Submit Review

          </button>


        </form>


      </section>





      {/* CUSTOMER REVIEWS */}

      <section className="customer-reviews">


        <h2>
          Customer Reviews
        </h2>


        {
          reviews.length === 0 ?

          (

            <p className="no-review">
              No reviews yet. Be the first to share your experience!
            </p>

          )

          :

          (

            <div className="review-list">


            {
              reviews.map((item,index)=>(


                <div 
                  className="customer-card"
                  key={index}
                >


                  <div className="review-stars">

                    {"★".repeat(item.rating)}

                  </div>


                  <h3>
                    {item.name}
                  </h3>


                  <p>
                    {item.message}
                  </p>


                  <span>
                    Verified Customer
                  </span>


                </div>


              ))
            }


            </div>

          )

        }


      </section>



    </div>

  );

}


export default WriteReview;