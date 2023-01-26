import "../App.css";
import React from 'react'
import img1 from "./img/nike1.png";
import rating from "./img/rating.png";

export default function Products(props) {
  return (
    <>
    <div class="card col-sm mx-2 my-2 mb-0" style={{ maxWidth: "250px" }}>
            <img
              src={img1}
              class="card-img-top"
              alt="..."
              style={{ padding: "25px", backgroundColor: "#F7F7F7" }}
            />
            <div class="card-body">
              <h5 class="card-title">{props.title}</h5>
              <p class="card-text d-flex">
                <img
                  className="mx-1"
                  src={rating}
                  alt=""
                  style={{ height: "20px" }}
                />
                <div className="rating d-flex">
                    4.9
                <div className="reviews mx-1">(123 reviews)</div>
                </div>
              </p>
              <a href="/" class="btn btn-primary">
                Buy
              </a>
            </div>
          </div>
    </>
  )
}
