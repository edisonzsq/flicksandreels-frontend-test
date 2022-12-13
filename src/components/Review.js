import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShowMoreText from "react-show-more-text";
import Form from "./Form";
import "./Review.css";

function Review() {
  const [reviewData, setReviewData] = useState([]);
  // const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const reviewUrl = `https://graceful-hoodie-deer.cyclic.app/review/6392a9a07eea6b0596da7586`;
    // const makeReviewApiCall = async () => {
    fetch(reviewUrl).then(res => res.json()).then(data => {
        console.log("API is successful", data);
        setReviewData(data);
    });
    // let data = res.json();
    
    
    // };
    // makeReviewApiCall();
  }, []);

  const executeOnClick = (isExpanded) => {
    console.log(isExpanded);
  };

  const ReviewResult = () => {
    console.log("I am being rendered ", reviewData.items.length);
    return reviewData.items.map((review, index) => {
      return (
        <div>
          <h6>
            <strong>{review.username}</strong>
          </h6>
          <h6>
            <em>"{review.heading}"</em>
          </h6>
          <p>
            <ShowMoreText
              lines={3}
              more="Show more"
              less="Show less"
              className="content-css"
              anchorClass="show-more-less-clickable"
              onClick={executeOnClick}
              expanded={false}
              truncatedEndingComponent={"... "}
            >
              {review.content}
            </ShowMoreText>
          </p>
        </div>
      );
    });
  };

  console.log(reviewData.items);

  const handleSubmitFromChild = (val) => {
    console.log("This is from child " + val);
    // addToReviewData(val);
  };

  // const addToReviewData = (newReview) => {
  //     setReviewData([...reviewData.items, newReview]);
  // }

  return (
    <>
      <h2>Movie Reviews</h2>
      <nav>
        <Link to="/">
          <button>Home Page</button>
        </Link>
        <Link to="/Popular">
          <button>Popular</button>
        </Link>
      </nav>
      <div className="divResult">
        <div className="section">
          <h4>{reviewData.title}</h4>
        </div>
        <div className="section">{reviewData.length > 0 ? reviewData.items.map((review, index) => {
      return (
        <div>
          <h6>
            <strong>{review.username}</strong>
          </h6>
          <h6>
            <em>"{review.heading}"</em>
          </h6>
          <p>
            <ShowMoreText
              lines={3}
              more="Show more"
              less="Show less"
              className="content-css"
              anchorClass="show-more-less-clickable"
              onClick={executeOnClick}
              expanded={false}
              truncatedEndingComponent={"... "}
            >
              {review.content}
            </ShowMoreText>
          </p>
        </div>
      );
    }) : null}</div>
        <div className="section">
          <h4>Add a review</h4>
          <Form onHandleSubmit={handleSubmitFromChild} />
        </div>
      </div>
    </>
  );
}

export default Review;
