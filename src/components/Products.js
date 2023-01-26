import "../App.css";
import React from "react";
import rating from "./img/rating.png";

export default function Products(props) {


  const Check=()=>{


// Nike Shoes Functions 

    if (props.cart === "one") {
      document.getElementById('cartBody').innerHTML = 
      `
            <img src=${props.image1} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8 mx-2">
            <div class="card-body">
              <h5 class="card-title">${props.title1}</h5>
              
              
            </div>
      `
    }
    else if (props.cart === "two") {
      document.getElementById('cartBody').innerHTML = 
      `
            <img src=${props.image2} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8 mx-2">
            <div class="card-body">
              <h5 class="card-title">${props.title2}</h5>
              
            </div>
      `
    }
    else if (props.cart === "three") {
      document.getElementById('cartBody').innerHTML = 
      `
            <img src=${props.image3} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8 mx-2">
            <div class="card-body">
              <h5 class="card-title">${props.title3}</h5>
              
            </div>
      `
    }
    else if (props.cart === "four") {
      document.getElementById('cartBody').innerHTML = 
      `
            <img src=${props.image4} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8 mx-2">
            <div class="card-body">
              <h5 class="card-title">${props.title4}</h5>
              
            </div>
      `
    }
  }

  // --------------------
  
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
            <div
              className="price1"
              style={{ textDecoration: "line-through", fontSize: "20px" }}
            >
              ₹{props.price1}
            </div>
            <div className="price2" style={{ fontSize: "20px" }}>
              ₹{props.price2}
            </div>
            <button
              class="btn btn-primary"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBothOptions"
              aria-controls="offcanvasWithBothOptions"
              id={props.cart}
              onClick={Check}
            >
              Cart
            </button>
          </div>
        </div>
      </div>
      <div
        class="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabindex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            Your Cart
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body" style={{margin:"10px", border:"2px solid"}}>
           <div id="cartBody" class="col-md-4 mx-2">
           {/* <img src={props.image} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8 mx-2">
            <div class="card-body">
              <h5 class="card-title">{props.title}</h5>
              
            </div>*/}
          </div> 
        </div>
      </div>
    </>
  );
}
