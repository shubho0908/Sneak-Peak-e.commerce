import React, {useState} from "react";
import "../App.css";
import img1 from "./img/nike1.png";
import img2 from "./img/nike2.png";
import img3 from "./img/nike3.png";
import img4 from "./img/nike4.png";
import Products from "./Products";

export default function Body() {


  const [Nikename, setNikename] = useState("Nike Shoe")
  const [Pumaname, setPumaname] = useState("Puma Shoe")

  

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
          <Products image={img1} image1={img1} title={Nikename + " " + 1}  title1={Nikename + " " + 1} price1="1,999" price2="899" cart="one"/>
          <Products image={img2} image2={img2} title={Nikename + " " + 2} title2={Nikename + " " + 2} price1="1,999" price2="899" cart="two"/>
          <Products image={img3} image3={img3} title={Nikename + " " + 3} title3={Nikename + " " + 3} price1="1,999" price2="899" cart="three"/>
          <Products image={img4} image4={img4} title={Nikename + " " + 4} title4={Nikename + " " + 4} price1="1,999" price2="899" cart="four"/>
          </div>
          <div className="second-row row my-4 mb-0 d-flex justify-content-center">
          <Products title={Pumaname + " " + 1}/>
          <Products title={Pumaname + " " + 2}/>
          <Products title={Pumaname + " " + 3}/>
          <Products title={Pumaname + " " + 4}/>
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
