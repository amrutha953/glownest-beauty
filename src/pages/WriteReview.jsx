import React, { useState } from "react";
import "../styles/WriteReview.css";

function WriteReview() {

  const [review, setReview] = useState({
    name:"",
    email:"",
    rating:"",
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

    alert("Thank you for your review ❤️");

    setReview({
      name:"",
      email:"",
      rating:"",
      message:""
    });
  };


  return (

    <div className="review-page">


      <section className="review-hero">

        <h1>Write A Review</h1>

        <p>
          Share your GlowNest Beauty experience with us.
          Your feedback helps us improve.
        </p>

      </section>



      <form 
        className="review-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={review.name}
          onChange={handleChange}
          required
        />


        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={review.email}
          onChange={handleChange}
          required
        />


        <select
          name="rating"
          value={review.rating}
          onChange={handleChange}
          required
        >

          <option value="">
            Select Rating
          </option>

          <option value="5">
            ⭐⭐⭐⭐⭐ Excellent
          </option>

          <option value="4">
            ⭐⭐⭐⭐ Very Good
          </option>

          <option value="3">
            ⭐⭐⭐ Good
          </option>

          <option value="2">
            ⭐⭐ Average
          </option>

          <option value="1">
            ⭐ Poor
          </option>

        </select>



        <textarea
          name="message"
          placeholder="Write your review..."
          value={review.message}
          onChange={handleChange}
          required
        />


        <button type="submit">
          Submit Review
        </button>


      </form>


    </div>

  );

}


export default WriteReview;