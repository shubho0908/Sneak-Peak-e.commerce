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

  const Active1=()=>{
    document.getElementById('all').classList.add("active")
    document.getElementById('nike').classList.remove("active")
    document.getElementById('puma').classList.remove("active")
    document.getElementById('reebook').classList.remove("active")
    document.getElementById('adidas').classList.remove("active")
  }

  const Active2=()=>{
    document.getElementById('nike').classList.add("active")
    document.getElementById('all').classList.remove("active")
    document.getElementById('puma').classList.remove("active")
    document.getElementById('reebook').classList.remove("active")
    document.getElementById('adidas').classList.remove("active")
  }

  const Active3=()=>{
    document.getElementById('nike').classList.remove("active")
    document.getElementById('all').classList.remove("active")
    document.getElementById('puma').classList.remove("active")
    document.getElementById('reebook').classList.remove("active")
    document.getElementById('adidas').classList.add("active")
  }

  const Active4=()=>{
    document.getElementById('nike').classList.remove("active")
    document.getElementById('all').classList.remove("active")
    document.getElementById('puma').classList.add("active")
    document.getElementById('reebook').classList.remove("active")
    document.getElementById('adidas').classList.remove("active")
  }

  const Active5=()=>{
    document.getElementById('nike').classList.remove("active")
    document.getElementById('all').classList.remove("active")
    document.getElementById('puma').classList.remove("active")
    document.getElementById('reebook').classList.add("active")
    document.getElementById('adidas').classList.remove("active")
  }


  

  return (
    <>
      <div className="container my-5 ">
        <div className="lists d-flex flex-wrap justify-content-center my-1">
          <button id="all" onClick={Active1} type="button" class="btn btn-outline-primary active mx-3">
            All Products
          </button>
          <button id="nike" onClick={Active2} type="button" class="btn btn-outline-primary mx-3">
            Nike
          </button>
          <button id="adidas" onClick={Active3} type="button" class="btn btn-outline-primary mx-3">
            Adidas
          </button>
          <button id="puma" onClick={Active4} type="button" class="btn btn-outline-primary mx-3">
            Puma
          </button>
          <button id="reebook" onClick={Active5} type="button" class="btn btn-outline-primary mx-3">
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
          <Products image={img1} image1={img1} title={Pumaname + " " + 1}/>
          <Products image={img2} image2={img2} title={Pumaname + " " + 2}/>
          <Products image={img3} image3={img3} title={Pumaname + " " + 3}/>
          <Products image={img4} image4={img4} title={Pumaname + " " + 4}/>
          </div>
          <div className="third-row row my-4 d-flex justify-content-center">
          <Products image={img1} image1={img1} title={Nikename + " " + 9}/>
          <Products image={img2} image2={img2} title={Nikename + " " + 10}/>
          <Products image={img3} image3={img3} title={Nikename + " " + 11}/>
          <Products image={img4} image4={img4} title={Nikename + " " + 12}/>
          </div>
        </div>
      </div>
    </>
  );
}
