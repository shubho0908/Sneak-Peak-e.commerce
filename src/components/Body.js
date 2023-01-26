import React from "react";
import img1 from './img/nike1.png'
import rating from './img/rating.png'

export default function Body() {
  return (
    <>
      <div className="container my-5 ">
        <div className="lists d-flex justify-content-center">
          <button type="button" class="btn btn-primary mx-3">
            All Products
          </button>
          <button type="button" class="btn btn-outline-primary mx-3">
            Nike
          </button>
          <button type="button" class="btn btn-outline-primary mx-3">
            Adidas
          </button>
          <button type="button" class="btn btn-outline-primary mx-3">
            Puma
          </button>
          <button type="button" class="btn btn-outline-primary mx-3">
            Reebook
          </button>
        </div>
        <div className="products my-5">
          <div class="card" style={{maxWidth: "250px"}}>
            <img src={img1} class="card-img-top" alt="..." style={{padding:"25px", backgroundColor:"#F7F7F7"}}/>
            <div class="card-body">
              <h5 class="card-title">Nike Shoe 1</h5>
              <p class="card-text d-flex">
                <img className="mx-2" src={rating} alt="" style={{height:"20px"}}/>
                4.9
                <div className="reviews mx-1">
                    (1,223 reviews)
                </div>
              </p>
              <a href="/" class="btn btn-primary">
                Buy
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
