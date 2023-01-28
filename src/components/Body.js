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


    document.getElementById('nike1').style.setProperty('display', 'flex', 'important');
    document.getElementById('adidas1').style.setProperty('display', 'flex', 'important');
    document.getElementById('puma1').style.setProperty('display', 'flex', 'important');

  }
  
  const Active2=()=>{
    document.getElementById('nike').classList.add("active")
    document.getElementById('all').classList.remove("active")
    document.getElementById('puma').classList.remove("active")
    document.getElementById('reebook').classList.remove("active")
    document.getElementById('adidas').classList.remove("active")
    
    
    document.getElementById('puma1').style.setProperty('display', 'none', 'important');
    document.getElementById('adidas1').style.setProperty('display', 'none', 'important');
    document.getElementById('nike1').style.setProperty('display', 'flex', 'important');
    

  }

  const Active3=()=>{
    document.getElementById('nike').classList.remove("active")
    document.getElementById('all').classList.remove("active")
    document.getElementById('puma').classList.remove("active")
    document.getElementById('reebook').classList.remove("active")
    document.getElementById('adidas').classList.add("active")

    document.getElementById('nike1').style.setProperty('display', 'none', 'important');
    document.getElementById('puma1').style.setProperty('display', 'none', 'important');
    document.getElementById('adidas1').style.setProperty('display', 'flex', 'important');

  }

  const Active4=()=>{
    document.getElementById('nike').classList.remove("active")
    document.getElementById('all').classList.remove("active")
    document.getElementById('puma').classList.add("active")
    document.getElementById('reebook').classList.remove("active")
    document.getElementById('adidas').classList.remove("active")

    document.getElementById('nike1').style.setProperty('display', 'none', 'important');
    document.getElementById('adidas1').style.setProperty('display', 'none', 'important');
    document.getElementById('puma1').style.setProperty('display', 'flex', 'important');


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
          <div id="nike1" className="first-row row d-flex justify-content-center ">
          <Products image={img1} image1={img1} title={Nikename + " " + 1}  title1={Nikename + " " + 1} price1="1,999" price2="899" cart="one"/>
          <Products image={img2} image2={img2} title={Nikename + " " + 2} title2={Nikename + " " + 2} price1="1,999" price2="899" cart="two"/>
          <Products image={img3} image3={img3} title={Nikename + " " + 3} title3={Nikename + " " + 3} price1="1,999" price2="899" cart="three"/>
          <Products image={img4} image4={img4} title={Nikename + " " + 4} title4={Nikename + " " + 4} price1="1,999" price2="899" cart="four"/>
          </div>
          <div id="puma1" className="second-row row mb-0 d-flex justify-content-center ">
          <Products image={img1} image1={img1} title={Pumaname + " " + 1} title5={Nikename + " " + 5} price1="1,999" price2="899" cart="five"/>
          <Products image={img2} image2={img2} title={Pumaname + " " + 2} title6={Nikename + " " + 6} price1="1,999" price2="899" cart="six"/>
          <Products image={img3} image3={img3} title={Pumaname + " " + 3} title7={Nikename + " " + 7} price1="1,999" price2="899" cart="seven"/>
          <Products image={img4} image4={img4} title={Pumaname + " " + 4} title8={Nikename + " " + 8} price1="1,999" price2="899" cart="eight"/>
          </div>
          <div id="adidas1" className="third-row row d-flex justify-content-center ">
          <Products image={img1} image1={img1} title={Nikename + " " + 9} title9={Nikename + " " + 9} price1="1,999" price2="899" cart="nine"/>
          <Products image={img2} image2={img2} title={Nikename + " " + 10} title10={Nikename + " " + 10} price1="1,999" price2="899" cart="ten"/>
          <Products image={img3} image3={img3} title={Nikename + " " + 11} title11={Nikename + " " + 11} price1="1,999" price2="899" cart="eleven"/>
          <Products image={img4} image4={img4} title={Nikename + " " + 12} title12={Nikename + " " + 12} price1="1,999" price2="899" cart="twelve"/>
          </div>
        </div>
      </div>
    </>
  );
}
