import React from "react";
import "../App.css";
import img1 from "./img/nike1.png";
import img2 from "./img/nike2.png";
import img3 from "./img/nike3.png";
import img4 from "./img/nike4.png";
import img5 from "./img/puma1.png";
import img6 from "./img/puma2.png";
import img7 from "./img/puma3.png";
import img8 from "./img/puma4.png";
import img9 from "./img/adidas1.png";
import img10 from "./img/adidas2.png";
import img11 from "./img/adidas3.png";
import img12 from "./img/adidas4.png";
import img13 from "./img/reebook1.png";
import img14 from "./img/reebook2.png";
import img15 from "./img/reebook3.png";
import img16 from "./img/reebook4.png";
import Products from "./Products";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function Body() {

  let Nikename = "Nike Shoe"
  let AdidasName = "Adidas Shoe"
  let Pumaname = "Puma Shoe"
  let ReebookName = "Reebook Shoe"

  const notify = () => toast.success("Item added to cart!");
  const notify2 = () => toast.success("Item deleted from the cart!");


  return (
    <>
    <ToastContainer position="top-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"/>

      <div className="container my-5 ">
        <div className="lists d-flex flex-wrap justify-content-center my-1">
          <h2>Have a Sneak-Peak</h2>
        </div>
        <div className="products d-flex justify-content-center my-5 row">
          <div
            id="nike1"
            className="first-row row d-flex justify-content-center "
          >
            <Products
            cardID="1"
            notify2 = {notify2}
            notify={notify}
              image={img1}
              image1={img1}
              title={Nikename + " " + 1}
              title1={Nikename + " " + 1}
              price1="1,999"
              price2="899"
              cart="one"
            />
            <Products
            cardID="2"
            notify2 = {notify2}
            notify={notify}
              image={img2}
              image2={img2}
              title={Nikename + " " + 2}
              title2={Nikename + " " + 2}
              price1="1,999"
              price2="899"
              cart="two"
            />
            <Products
            cardID="3"
            notify2 = {notify2}
            notify={notify}
              image={img3}
              image3={img3}
              title={Nikename + " " + 3}
              title3={Nikename + " " + 3}
              price1="1,999"
              price2="899"
              cart="three"
            />
            <Products
            cardID="4"
            notify2 = {notify2}
            notify={notify}
              image={img4}
              image4={img4}
              title={Nikename + " " + 4}
              title4={Nikename + " " + 4}
              price1="1,999"
              price2="899"
              cart="four"
            />
          </div>
          <div
            id="puma1"
            className="second-row row mb-0 d-flex justify-content-center "
          >
            <Products
            cardID="5"
            notify2 = {notify2}
            notify={notify}
              image={img5}
              image5={img5}
              title={Pumaname + " " + 1}
              title5={Pumaname + " " + 1}
              price1="2,499"
              price2="999"
              cart="five"
            />
            <Products
            cardID="6"
            notify2 = {notify2}
            notify={notify}
              image={img6}
              image6={img6}
              title={Pumaname + " " + 2}
              title6={Pumaname + " " + 2}
              price1="2,499"
              price2="999"
              cart="six"
            />
            <Products
            cardID="7"
            notify2 = {notify2}
            notify={notify}
              image={img7}
              image7={img7}
              title={Pumaname + " " + 3}
              title7={Pumaname + " " + 3}
              price1="2,499"
              price2="999"
              cart="seven"
            />
            <Products
            cardID="8"
            notify2 = {notify2}
            notify={notify}
              image={img8}
              image8={img8}
              title={Pumaname + " " + 4}
              title8={Pumaname + " " + 4}
              price1="2,499"
              price2="999"
              cart="eight"
            />
          </div>
          <div
            id="adidas1"
            className="third-row row d-flex justify-content-center "
          >
            <Products
            cardID="9"
            notify2 = {notify2}
            notify={notify}
              image={img9}
              image9={img9}
              title={AdidasName + " " + 1}
              title9={AdidasName + " " + 1}
              price1="1,499"
              price2="799"
              cart="nine"
            />
            <Products
            cardID="10"
            notify2 = {notify2}
            notify={notify}
              image={img10}
              image10={img10}
              title={AdidasName + " " + 2}
              title10={AdidasName + " " + 2}
              price1="1,499"
              price2="799"
              cart="ten"
            />
            <Products
            cardID="11"
            notify2 = {notify2}
            notify={notify}
              image={img11}
              image11={img11}
              title={AdidasName + " " + 3}
              title11={AdidasName + " " + 3}
              price1="1,499"
              price2="799"
              cart="eleven"
            />
            <Products
            cardID="12"
            notify2 = {notify2}
            notify={notify}
              image={img12}
              image12={img12}
              title={AdidasName + " " + 4}
              title12={AdidasName + " " + 4}
              price1="1,499"
              price2="799"
              cart="twelve"
            />
          </div>
          <div
            id="reebook1"
            className="fourth-row row d-flex justify-content-center "
          >
            <Products
            cardID="13"
            notify2 = {notify2}
            notify={notify}
              image={img13}
              image13={img13}
              title={ReebookName + " " + 1}
              title13={ReebookName + " " + 1}
              price1="1,999"
              price2="899"
              cart="thirteen"
            />
            <Products
            cardID="14"
            notify2 = {notify2}
            notify={notify}
              image={img14}
              image14={img14}
              title={ReebookName + " " + 2}
              title14={ReebookName + " " + 2}
              price1="1,999"
              price2="899"
              cart="fourteen"
            />
            <Products
            cardID="15"
            notify2 = {notify2}
            notify={notify}
              image={img15}
              image15={img15}
              title={ReebookName + " " + 3}
              title15={ReebookName + " " + 3}
              price1="1,999"
              price2="899"
              cart="fifteen"
            />
            <Products
            cardID="16"
            notify2 = {notify2}
            notify={notify}
              image={img16}
              image16={img16}
              title={ReebookName + " " + 4}
              title16={ReebookName + " " + 4}
              price1="1,999"
              price2="899"
              cart="sixteen"
            />
          </div>
        </div>
      </div>
    </>
  );
}
