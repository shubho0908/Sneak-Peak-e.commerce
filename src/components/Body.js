import React, {useState} from "react";
import "../App.css";
import Products from "./Products";

export default function Body() {


  const [Nikename, setNikename] = useState("Nike Shoe")

  return (
    <>
      <div className="container my-5 ">
        <div className="lists d-flex flex-wrap justify-content-center my-1">
          <button type="button" class="btn btn-outline-primary active mx-3">
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
        <div className="products d-flex justify-content-center my-5 row">
          <div className="first-row row d-flex justify-content-center">
          <Products title={Nikename + " " + 1}/>
          <Products title={Nikename + " " + 2}/>
          <Products title={Nikename + " " + 3}/>
          <Products title={Nikename + " " + 4}/>
          </div>
          <div className="second-row row my-4 mb-0 d-flex justify-content-center">
          <Products title={Nikename + " " + 5}/>
          <Products title={Nikename + " " + 6}/>
          <Products title={Nikename + " " + 7}/>
          <Products title={Nikename + " " + 8}/>
          </div>
          <div className="third-row row my-4 d-flex justify-content-center">
          <Products title={Nikename + " " + 9}/>
          <Products title={Nikename + " " + 10}/>
          <Products title={Nikename + " " + 11}/>
          <Products title={Nikename + " " + 12}/>
          </div>
        </div>
      </div>
    </>
  );
}
