import "../App.css";
import React from 'react'
import rating from "./img/rating.png";

export default function Products(props) {
  return (
    <>
    <div class="card col-sm mx-2 my-2 mb-0" style={{ maxWidth: "250px" }}>
            <img
              src={props.image}
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
              <div className="purchase d-flex justify-content-between">
                <div className="price1" style={{textDecoration:"line-through", fontSize:"20px"}}>₹{props.price1}</div>
                <div className="price2" style={{fontSize:"20px"}}>₹{props.price2}</div>
              <a href="/" class="btn btn-primary">
                Cart
              </a>
              
              </div>
            </div>
          </div>
    </>
  )
}
