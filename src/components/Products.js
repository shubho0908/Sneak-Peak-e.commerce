import "../App.css";
import React from "react";
import rating from "./img/rating.png";

export default function Products(props) {

  
  const Check = () => {
    // Nike Shoes Functions
    let TotalPrice = 0
    
    const cartBody = document.getElementById("cartBody");

    if (props.cart === "one") {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cartStyle", "my-3");
      cartBody.appendChild(cartItem);

      cartItem.innerHTML = `
            <img src=${props.image1} class="img-fluid rounded-start productImg" alt="..." />
          </div>
          <div class="col-md-8 mx-2">
            <div class="card-body">
            <h5 class="card-title">${props.title1}</h5>
            <h5 class="price-1 card-title my-2" style="font-weight: 300">₹${props.price2}</h5>
            <div class="cartAdd d-flex">
            <button id="add1" type="button" class="btn btn-primary">+</button>
            <input id="cartInput1" class="cartInput" type="number" disabled="disabled" />
           <button id="remove1" type="button" class="btn btn-primary">-</button>
           </div>
           <div id="danger1" class="Danger">
           <button type="button" class="delete btn btn-danger my-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
           <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
         </svg></button>
           </div>

             
            </div>
      `;

      document.getElementById("cartInput1").value = 1;
      const removeBtn = document.getElementById("remove1");
      removeBtn.disabled = true;

      document.getElementById("add1").addEventListener("click", () => {
        document.getElementById("cartInput1").value =
          parseInt(document.getElementById("cartInput1").value) + 1;
        let newprice =
          parseInt(props.price2) *
          parseInt(document.getElementById("cartInput1").value);
        document.querySelector(".price-1").innerHTML = `₹${newprice}`;
        removeBtn.disabled = false;

      });

      document.getElementById("remove1").addEventListener("click", () => {
        if (parseInt(document.getElementById("cartInput1").value) > 1) {
          document.getElementById("cartInput1").value =
            parseInt(document.getElementById("cartInput1").value) - 1;
          let newprice =
            parseInt(props.price2) *
            parseInt(document.getElementById("cartInput1").value);
          document.querySelector(".price-1").innerHTML = `₹${newprice}`;
          

        }
        if (parseInt(document.getElementById("cartInput1").value) <= 1) {
          removeBtn.disabled = true;
        }

      });

      document.getElementById('one').innerHTML = "Added"
      document.getElementById('one').disabled = true


    } else if (props.cart === "two") {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cartStyle", "my-3");
      cartItem.innerHTML = `
            <img src=${props.image2} class="img-fluid rounded-start productImg" alt="..." />
          </div>
          <div class="col-md-8 mx-2">
            <div class="card-body">
              <h5 class="card-title">${props.title2}</h5>
              
              
              <h5 class="price-2 card-title my-2" style="font-weight: 300">₹${props.price2}</h5>
<div class="cartAdd d-flex">
            <button id="add2" type="button" class="btn btn-primary">+</button>
            <input id="cartInput2" class="cartInput" type="number" disabled="disabled" />
           <button id="remove2" type="button" class="btn btn-primary">-</button>
            </div>
            <div id="danger2" class="Danger">
            <button type="button" class="delete btn btn-danger my-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
          </svg></button>
            </div>
            </div>
      `;
      cartBody.appendChild(cartItem);

      document.getElementById("cartInput2").value = 1;
      const removeBtn = document.getElementById("remove2");
      removeBtn.disabled = true;
      document.getElementById("add2").addEventListener("click", () => {
        document.getElementById("cartInput2").value =
          parseInt(document.getElementById("cartInput2").value) + 1;
        let newprice =
          parseInt(props.price2) *
          parseInt(document.getElementById("cartInput2").value);
        document.querySelector(".price-2").innerHTML = `₹${newprice}`;
        removeBtn.disabled = false;

      });

      document.getElementById("remove2").addEventListener("click", () => {
        if (parseInt(document.getElementById("cartInput2").value) > 1) {
          document.getElementById("cartInput2").value =
            parseInt(document.getElementById("cartInput2").value) - 1;
          let newprice =
            parseInt(props.price2) *
            parseInt(document.getElementById("cartInput2").value);
          document.querySelector(".price-2").innerHTML = `₹${newprice}`;
        }
        if (parseInt(document.getElementById("cartInput2").value) <= 1) {
          removeBtn.disabled = true;
        }
      });

      document.getElementById('two').innerHTML = "Added"
      document.getElementById('two').disabled = true

    } else if (props.cart === "three") {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cartStyle", "my-3");
      cartItem.innerHTML = `
            <img src=${props.image3} class="img-fluid rounded-start productImg" alt="..." />
          </div>
          <div class="col-md-8 mx-2">
            <div class="card-body">
              <h5 class="card-title">${props.title3}</h5>
              
              
              <h5 class="price-3 card-title my-2" style="font-weight: 300">₹${props.price2}</h5>
<div class="cartAdd d-flex">
            <button id="add3" type="button" class="btn btn-primary">+</button>
            <input id="cartInput3"  class="cartInput"type="number" disabled="disabled" />
           <button id="remove3" type="button" class="btn btn-primary">-</button>
            </div>
            <div id="danger3" class="Danger">
            <button type="button" class="delete btn btn-danger my-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
          </svg></button>
            </div>
            </div>
      `;

      cartBody.appendChild(cartItem);

      document.getElementById("cartInput3").value = 1;
      const removeBtn = document.getElementById("remove3");
      removeBtn.disabled = true;
      document.getElementById("add3").addEventListener("click", () => {
        document.getElementById("cartInput3").value =
          parseInt(document.getElementById("cartInput3").value) + 1;
        let newprice =
          parseInt(props.price2) *
          parseInt(document.getElementById("cartInput3").value);
        document.querySelector(".price-3").innerHTML = `₹${newprice}`;
        removeBtn.disabled = false;
      });

      document.getElementById("remove3").addEventListener("click", () => {
        if (parseInt(document.getElementById("cartInput3").value) > 1) {
          document.getElementById("cartInput3").value =
            parseInt(document.getElementById("cartInput3").value) - 1;
          let newprice =
            parseInt(props.price2) *
            parseInt(document.getElementById("cartInput3").value);
          document.querySelector(".price-3").innerHTML = `₹${newprice}`;
        }
        if (parseInt(document.getElementById("cartInput3").value) <= 1) {
          removeBtn.disabled = true;
        }
      });

      document.getElementById('three').innerHTML = "Added"
      document.getElementById('three').disabled = true

    } else if (props.cart === "four") {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cartStyle", "my-3");
      cartItem.innerHTML = `
            <img src=${props.image4} class="img-fluid rounded-start productImg" alt="..." />
          </div>
          <div class="col-md-8 mx-2">
            <div class="card-body">
              <h5 class="card-title">${props.title4}</h5>
              
              
              <h5 class="price-4 card-title my-2" style="font-weight: 300">₹${props.price2}</h5>
<div class="cartAdd d-flex">
            <button id="add4" type="button" class="btn btn-primary">+</button>
            <input id="cartInput4"  class="cartInput"type="number" disabled="disabled" />
           <button id="remove4" type="button" class="btn btn-primary">-</button>
            </div>
            <div id="danger4" class="Danger">
            <button type="button" class="delete btn btn-danger my-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
          </svg></button>
            </div>
            </div>
      `;

      cartBody.appendChild(cartItem);


      document.getElementById("cartInput4").value = 1;
      const removeBtn = document.getElementById("remove4");
      removeBtn.disabled = true;

      document.getElementById("add4").addEventListener("click", () => {
        document.getElementById("cartInput4").value =
          parseInt(document.getElementById("cartInput4").value) + 1;
        let newprice =
          parseInt(props.price2) *
          parseInt(document.getElementById("cartInput4").value);
        document.querySelector(".price-4").innerHTML = `₹${newprice}`;
        removeBtn.disabled = false;
      });

      document.getElementById("remove4").addEventListener("click", () => {
        if (parseInt(document.getElementById("cartInput4").value) > 1) {
          document.getElementById("cartInput4").value =
            parseInt(document.getElementById("cartInput4").value) - 1;
          let newprice =
            parseInt(props.price2) *
            parseInt(document.getElementById("cartInput4").value);
          document.querySelector(".price-4").innerHTML = `₹${newprice}`;
        }
        if (parseInt(document.getElementById("cartInput4").value) <= 1) {
          removeBtn.disabled = true;
        }
      });

      document.getElementById('four').innerHTML = "Added"
      document.getElementById('four').disabled = true

    } else if (props.cart === "five") {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cartStyle", "my-3");
      cartItem.innerHTML = `
            <img src=${props.image5} class="img-fluid rounded-start productImg" alt="..." />
          </div>
          <div class="col-md-8 mx-2">
            <div class="card-body">
              <h5 class="card-title">${props.title5}</h5>
              
              
              <h5 class="price-5 card-title my-2" style="font-weight: 300">₹${props.price2}</h5>
<div class="cartAdd d-flex">
            <button id="add5" type="button" class="btn btn-primary">+</button>
            <input id="cartInput5"  class="cartInput"type="number" disabled="disabled" />
           <button id="remove5" type="button" class="btn btn-primary">-</button>
            </div>
            <div id="danger5" class="Danger">
            <button type="button" class="delete btn btn-danger my-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
          </svg></button>
            </div>
            </div>
      `;

      cartBody.appendChild(cartItem);

      document.getElementById("cartInput5").value = 1;
      const removeBtn = document.getElementById("remove5");
      removeBtn.disabled = true;

      document.getElementById("add5").addEventListener("click", () => {
        document.getElementById("cartInput5").value =
          parseInt(document.getElementById("cartInput5").value) + 1;
        let newprice =
          parseInt(props.price2) *
          parseInt(document.getElementById("cartInput5").value);
        document.querySelector(".price-5").innerHTML = `₹${newprice}`;
        removeBtn.disabled = false;
      });

      document.getElementById("remove5").addEventListener("click", () => {
        if (parseInt(document.getElementById("cartInput5").value) > 1) {
          document.getElementById("cartInput5").value =
            parseInt(document.getElementById("cartInput5").value) - 1;
          let newprice =
            parseInt(props.price2) *
            parseInt(document.getElementById("cartInput5").value);
          document.querySelector(".price-5").innerHTML = `₹${newprice}`;
        }
        if (parseInt(document.getElementById("cartInput5").value) <= 1) {
          removeBtn.disabled = true;
        }
      });

      document.getElementById('five').innerHTML = "Added"
      document.getElementById('five').disabled = true

    } else if (props.cart === "six") {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cartStyle", "my-3");
      cartItem.innerHTML = `
            <img src=${props.image6} class="img-fluid rounded-start productImg" alt="..." />
          </div>
          <div class="col-md-8 mx-2">
            <div class="card-body">
              <h5 class="card-title">${props.title6}</h5>
              
              
              <h5 class="price-6 card-title my-2" style="font-weight: 300">₹${props.price2}</h5>
<div class="cartAdd d-flex">
            <button id="add6" type="button" class="btn btn-primary">+</button>
            <input id="cartInput6"  class="cartInput"type="number" disabled="disabled" />
           <button id="remove6" type="button" class="btn btn-primary">-</button>
            </div>
            <div id="danger6" class="Danger">
            <button type="button" class="delete btn btn-danger my-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
          </svg></button>
            </div>
            </div>
      `;

      cartBody.appendChild(cartItem);

      document.getElementById("cartInput6").value = 1;
      const removeBtn = document.getElementById("remove6");
      removeBtn.disabled = true;

      document.getElementById("add6").addEventListener("click", () => {
        document.getElementById("cartInput6").value =
          parseInt(document.getElementById("cartInput6").value) + 1;
        let newprice =
          parseInt(props.price2) *
          parseInt(document.getElementById("cartInput6").value);
        document.querySelector(".price-6").innerHTML = `₹${newprice}`;
        removeBtn.disabled = false;
      });

      document.getElementById("remove6").addEventListener("click", () => {
        if (parseInt(document.getElementById("cartInput6").value) > 1) {
          document.getElementById("cartInput6").value =
            parseInt(document.getElementById("cartInput6").value) - 1;
          let newprice =
            parseInt(props.price2) *
            parseInt(document.getElementById("cartInput6").value);
          document.querySelector(".price-6").innerHTML = `₹${newprice}`;
        }
        if (parseInt(document.getElementById("cartInput6").value) <= 1) {
          removeBtn.disabled = true;
        }
      });

      document.getElementById('six').innerHTML = "Added"
      document.getElementById('six').disabled = true
    } 
    else if (props.cart === "seven") {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cartStyle", "my-3");
      cartItem.innerHTML = `
            <img src=${props.image7} class="img-fluid rounded-start productImg" alt="..." />
          </div>
          <div class="col-md-8 mx-2">
            <div class="card-body">
              <h5 class="card-title">${props.title7}</h5>
              
              
              <h5 class="price-7 card-title my-2" style="font-weight: 300">₹${props.price2}</h5>
<div class="cartAdd d-flex">
            <button id="add7" type="button" class="btn btn-primary">+</button>
            <input id="cartInput7"  class="cartInput"type="number" disabled="disabled" />
           <button id="remove7" type="button" class="btn btn-primary">-</button>
            </div>
            <div id="danger7" class="Danger">
            <button type="button" class="delete btn btn-danger my-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
          </svg></button>
            </div>
            </div>
      `;

      cartBody.appendChild(cartItem);

      document.getElementById("cartInput7").value = 1;
      const removeBtn = document.getElementById("remove7");
      removeBtn.disabled = true;

      document.getElementById("add7").addEventListener("click", () => {
        document.getElementById("cartInput7").value =
          parseInt(document.getElementById("cartInput7").value) + 1;
        let newprice =
          parseInt(props.price2) *
          parseInt(document.getElementById("cartInput7").value);
        document.querySelector(".price-7").innerHTML = `₹${newprice}`;
        removeBtn.disabled = false;
      });

      document.getElementById("remove7").addEventListener("click", () => {
        if (parseInt(document.getElementById("cartInput7").value) > 1) {
          document.getElementById("cartInput7").value =
            parseInt(document.getElementById("cartInput7").value) - 1;
          let newprice =
            parseInt(props.price2) *
            parseInt(document.getElementById("cartInput7").value);
          document.querySelector(".price-7").innerHTML = `₹${newprice}`;
        }
        if (parseInt(document.getElementById("cartInput7").value) <= 1) {
          removeBtn.disabled = true;
        }
      });

      document.getElementById('seven').innerHTML = "Added"
      document.getElementById('seven').disabled = true
    } 
    else if (props.cart === "eight") {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cartStyle", "my-3");
      cartItem.innerHTML = `
            <img src=${props.image8} class="img-fluid rounded-start productImg" alt="..." />
          </div>
          <div class="col-md-8 mx-2">
            <div class="card-body">
              <h5 class="card-title">${props.title8}</h5>
              
              
              <h5 class="price-8 card-title my-2" style="font-weight: 300">₹${props.price2}</h5>
<div class="cartAdd d-flex">
            <button id="add8" type="button" class="btn btn-primary">+</button>
            <input id="cartInput8"  class="cartInput"type="number" disabled="disabled" />
           <button id="remove8" type="button" class="btn btn-primary">-</button>
            </div>
            <div id="danger8" class="Danger">
            <button type="button" class="delete btn btn-danger my-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
          </svg></button>
            </div>
            </div>
      `;

      cartBody.appendChild(cartItem);

      document.getElementById("cartInput8").value = 1;
      const removeBtn = document.getElementById("remove8");
      removeBtn.disabled = true;

      document.getElementById("add8").addEventListener("click", () => {
        document.getElementById("cartInput8").value =
          parseInt(document.getElementById("cartInput8").value) + 1;
        let newprice =
          parseInt(props.price2) *
          parseInt(document.getElementById("cartInput8").value);
        document.querySelector(".price-8").innerHTML = `₹${newprice}`;
        removeBtn.disabled = false;
      });

      document.getElementById("remove8").addEventListener("click", () => {
        if (parseInt(document.getElementById("cartInput8").value) > 1) {
          document.getElementById("cartInput8").value =
            parseInt(document.getElementById("cartInput8").value) - 1;
          let newprice =
            parseInt(props.price2) *
            parseInt(document.getElementById("cartInput8").value);
          document.querySelector(".price-8").innerHTML = `₹${newprice}`;
        }
        if (parseInt(document.getElementById("cartInput8").value) <= 1) {
          removeBtn.disabled = true;
        }
      });

      document.getElementById('eight').innerHTML = "Added"
      document.getElementById('eight').disabled = true

    } else if (props.cart === "nine") {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cartStyle", "my-3");
      cartItem.innerHTML = `
            <img src=${props.image9} class="img-fluid rounded-start productImg" alt="..." />
          </div>
          <div class="col-md-8 mx-2">
            <div class="card-body">
              <h5 class="card-title">${props.title9}</h5>
              
              
              <h5 class="price-9 card-title my-2" style="font-weight: 300">₹${props.price2}</h5>
<div class="cartAdd d-flex">
            <button id="add9" type="button" class="btn btn-primary">+</button>
            <input id="cartInput9"  class="cartInput"type="number" disabled="disabled" />
           <button id="remove9" type="button" class="btn btn-primary">-</button>
            </div>
            <div id="danger9" class="Danger">
            <button type="button" class="delete btn btn-danger my-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
          </svg></button>
            </div>
            </div>
      `;

      cartBody.appendChild(cartItem);

      document.getElementById("cartInput9").value = 1;
      const removeBtn = document.getElementById("remove9");
      removeBtn.disabled = true;

      document.getElementById("add9").addEventListener("click", () => {
        document.getElementById("cartInput9").value =
          parseInt(document.getElementById("cartInput9").value) + 1;
        let newprice =
          parseInt(props.price2) *
          parseInt(document.getElementById("cartInput9").value);
        document.querySelector(".price-9").innerHTML = `₹${newprice}`;
        removeBtn.disabled = false;
      });

      document.getElementById("remove9").addEventListener("click", () => {
        if (parseInt(document.getElementById("cartInput9").value) > 1) {
          document.getElementById("cartInput9").value =
            parseInt(document.getElementById("cartInput9").value) - 1;
          let newprice =
            parseInt(props.price2) *
            parseInt(document.getElementById("cartInput9").value);
          document.querySelector(".price-9").innerHTML = `₹${newprice}`;
        }
        if (parseInt(document.getElementById("cartInput9").value) <= 1) {
          removeBtn.disabled = true;
        }
      });

      document.getElementById('nine').innerHTML = "Added"
      document.getElementById('nine').disabled = true

    } else if (props.cart === "ten") {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cartStyle", "my-3");
      cartItem.innerHTML = `
            <img src=${props.image10} class="img-fluid rounded-start productImg" alt="..." />
          </div>
          <div class="col-md-8 mx-2">
            <div class="card-body">
              <h5 class="card-title">${props.title10}</h5>
              
              
              <h5 class="price-10 card-title my-2" style="font-weight: 300">₹${props.price2}</h5>
<div class="cartAdd d-flex">
            <button id="add10" type="button" class="btn btn-primary">+</button>
            <input id="cartInput10"  class="cartInput"type="number" disabled="disabled" />
           <button id="remove10" type="button" class="btn btn-primary">-</button>
            </div>
            <div id="danger10" class="Danger">
            <button type="button" class="delete btn btn-danger my-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
          </svg></button>
            </div>
            </div>
      `;

      cartBody.appendChild(cartItem);
      document.getElementById("cartInput10").value = 1;
      const removeBtn = document.getElementById("remove10");
      removeBtn.disabled = true;

      document.getElementById("add10").addEventListener("click", () => {
        document.getElementById("cartInput10").value =
          parseInt(document.getElementById("cartInput10").value) + 1;
        let newprice =
          parseInt(props.price2) *
          parseInt(document.getElementById("cartInput10").value);
        document.querySelector(".price-10").innerHTML = `₹${newprice}`;
        removeBtn.disabled = false;
      });

      document.getElementById("remove10").addEventListener("click", () => {
        if (parseInt(document.getElementById("cartInput10").value) > 1) {
          document.getElementById("cartInput10").value =
            parseInt(document.getElementById("cartInput10").value) - 1;
          let newprice =
            parseInt(props.price2) *
            parseInt(document.getElementById("cartInput10").value);
          document.querySelector(".price-10").innerHTML = `₹${newprice}`;
        }
        if (parseInt(document.getElementById("cartInput10").value) <= 1) {
          removeBtn.disabled = true;
        }
      });

      document.getElementById('ten').innerHTML = "Added"
      document.getElementById('ten').disabled = true

    } else if (props.cart === "eleven") {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cartStyle", "my-3");
      cartItem.innerHTML = `
            <img src=${props.image11} class="img-fluid rounded-start productImg" alt="..." />
          </div>
          <div class="col-md-8 mx-2">
            <div class="card-body">
              <h5 class="card-title">${props.title11}</h5>
              
              
              <h5 class="price-11 card-title my-2" style="font-weight: 300">₹${props.price2}</h5>
<div class="cartAdd d-flex">
            <button id="add11" type="button" class="btn btn-primary">+</button>
            <input id="cartInput11"  class="cartInput"type="number" disabled="disabled" />
           <button id="remove11" type="button" class="btn btn-primary">-</button>
            </div>
            <div id="danger11" class="Danger">
            <button type="button" class="delete btn btn-danger my-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
          </svg></button>
            </div>
            </div>
      `;
      cartBody.appendChild(cartItem);
      document.getElementById("cartInput11").value = 1;
      const removeBtn = document.getElementById("remove11");
      removeBtn.disabled = true;

      document.getElementById("add11").addEventListener("click", () => {
        document.getElementById("cartInput11").value =
          parseInt(document.getElementById("cartInput11").value) + 1;
        let newprice =
          parseInt(props.price2) *
          parseInt(document.getElementById("cartInput11").value);
        document.querySelector(".price-11").innerHTML = `₹${newprice}`;
        removeBtn.disabled = false;
      });

      document.getElementById("remove11").addEventListener("click", () => {
        if (parseInt(document.getElementById("cartInput11").value) > 1) {
          document.getElementById("cartInput11").value =
            parseInt(document.getElementById("cartInput11").value) - 1;
          let newprice =
            parseInt(props.price2) *
            parseInt(document.getElementById("cartInput11").value);
          document.querySelector(".price-11").innerHTML = `₹${newprice}`;
        }
        if (parseInt(document.getElementById("cartInput11").value) <= 1) {
          removeBtn.disabled = true;
        }
      });

      document.getElementById('eleven').innerHTML = "Added"
      document.getElementById('eleven').disabled = true

    } else if (props.cart === "twelve") {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cartStyle", "my-3");
      cartItem.innerHTML = `
            <img src=${props.image12} class="img-fluid rounded-start productImg" alt="..." />
          </div>
          <div class="col-md-8 mx-2">
            <div class="card-body">
              <h5 class="card-title">${props.title12}</h5>
              
              
              <h5 class="price-12 card-title my-2" style="font-weight: 300">₹${props.price2}</h5>
<div class="cartAdd d-flex">
            <button id="add12" type="button" class="btn btn-primary">+</button>
            <input id="cartInput12"  class="cartInput"type="number" disabled="disabled" />
           <button id="remove12" type="button" class="btn btn-primary">-</button>
            </div>
            <div id="danger12" class="Danger">
            <button type="button" class="delete btn btn-danger my-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
          </svg></button>
            </div>
            </div>
      `;

      cartBody.appendChild(cartItem);
      document.getElementById("cartInput12").value = 1;
      const removeBtn = document.getElementById("remove12");
      removeBtn.disabled = true;

      document.getElementById("add12").addEventListener("click", () => {
        document.getElementById("cartInput12").value =
          parseInt(document.getElementById("cartInput12").value) + 1;
        let newprice =
          parseInt(props.price2) *
          parseInt(document.getElementById("cartInput12").value);
        document.querySelector(".price-12").innerHTML = `₹${newprice}`;
        removeBtn.disabled = false;
      });

      document.getElementById("remove12").addEventListener("click", () => {
        if (parseInt(document.getElementById("cartInput12").value) > 1) {
          document.getElementById("cartInput12").value =
            parseInt(document.getElementById("cartInput12").value) - 1;
          let newprice =
            parseInt(props.price2) *
            parseInt(document.getElementById("cartInput12").value);
          document.querySelector(".price-12").innerHTML = `₹${newprice}`;
        }
        if (parseInt(document.getElementById("cartInput12").value) <= 1) {
          removeBtn.disabled = true;
        }
      });

      document.getElementById('twelve').innerHTML = "Added"
      document.getElementById('twelve').disabled = true

    } else if (props.cart === "thirteen") {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cartStyle", "my-3");
      cartItem.innerHTML = `
            <img src=${props.image13} class="img-fluid rounded-start productImg" alt="..." />
          </div>
          <div class="col-md-8 mx-2">
            <div class="card-body">
              <h5 class="card-title">${props.title13}</h5>
              
              
              <h5 class="price-13 card-title my-2" style="font-weight: 300">₹${props.price2}</h5>
<div class="cartAdd d-flex">
            <button id="add13" type="button" class="btn btn-primary">+</button>
            <input id="cartInput13"  class="cartInput"type="number" disabled="disabled" />
           <button id="remove13" type="button" class="btn btn-primary">-</button>
            </div>
            <div id="danger13" class="Danger">
            <button type="button" class="delete btn btn-danger my-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
          </svg></button>
            </div>
            </div>
      `;

      cartBody.appendChild(cartItem);
      document.getElementById("cartInput13").value = 1;
      const removeBtn = document.getElementById("remove13");
      removeBtn.disabled = true;

      document.getElementById("add13").addEventListener("click", () => {
        document.getElementById("cartInput13").value =
          parseInt(document.getElementById("cartInput13").value) + 1;
        let newprice =
          parseInt(props.price2) *
          parseInt(document.getElementById("cartInput13").value);
        document.querySelector(".price-13").innerHTML = `₹${newprice}`;
        removeBtn.disabled = false;
      });

      document.getElementById("remove13").addEventListener("click", () => {
        if (parseInt(document.getElementById("cartInput13").value) > 1) {
          document.getElementById("cartInput13").value =
            parseInt(document.getElementById("cartInput13").value) - 1;
          let newprice =
            parseInt(props.price2) *
            parseInt(document.getElementById("cartInput13").value);
          document.querySelector(".price-13").innerHTML = `₹${newprice}`;
        }
        if (parseInt(document.getElementById("cartInput13").value) <= 1) {
          removeBtn.disabled = true;
        }
      });

      document.getElementById('thirteen').innerHTML = "Added"
      document.getElementById('thirteen').disabled = true

    } else if (props.cart === "fourteen") {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cartStyle", "my-3");
      cartItem.innerHTML = `
            <img src=${props.image14} class="img-fluid rounded-start productImg" alt="..." />
          </div>
          <div class="col-md-8 mx-2">
            <div class="card-body">
              <h5 class="card-title">${props.title14}</h5>
              
              
              <h5 class="price-14 card-title my-2" style="font-weight: 300">₹${props.price2}</h5>
<div class="cartAdd d-flex">
            <button id="add14" type="button" class="btn btn-primary">+</button>
            <input id="cartInput14"  class="cartInput"type="number" disabled="disabled" />
           <button id="remove14" type="button" class="btn btn-primary">-</button>
            </div>
            <div id="danger14" class="Danger">
            <button type="button" class="delete btn btn-danger my-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
          </svg></button>
            </div>
            </div>
      `;

      cartBody.appendChild(cartItem);
      document.getElementById("cartInput14").value = 1;
      const removeBtn = document.getElementById("remove14");
      removeBtn.disabled = true;

      document.getElementById("add14").addEventListener("click", () => {
        document.getElementById("cartInput14").value =
          parseInt(document.getElementById("cartInput14").value) + 1;
        let newprice =
          parseInt(props.price2) *
          parseInt(document.getElementById("cartInput14").value);
        document.querySelector(".price-14").innerHTML = `₹${newprice}`;
        removeBtn.disabled = false;
      });

      document.getElementById("remove14").addEventListener("click", () => {
        if (parseInt(document.getElementById("cartInput14").value) > 1) {
          document.getElementById("cartInput14").value =
            parseInt(document.getElementById("cartInput14").value) - 1;
          let newprice =
            parseInt(props.price2) *
            parseInt(document.getElementById("cartInput14").value);
          document.querySelector(".price-14").innerHTML = `₹${newprice}`;
        }
        if (parseInt(document.getElementById("cartInput14").value) <= 1) {
          removeBtn.disabled = true;
        }
      });

      document.getElementById('fourteen').innerHTML = "Added"
      document.getElementById('fourteen').disabled = true

    } else if (props.cart === "fifteen") {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cartStyle", "my-3");
      cartItem.innerHTML = `
            <img src=${props.image15} class="img-fluid rounded-start productImg" alt="..." />
          </div>
          <div class="col-md-8 mx-2">
            <div class="card-body">
              <h5 class="card-title">${props.title15}</h5>
              
              </div>
              <h5 class="price-15 card-title my-2" style="font-weight: 300">₹${props.price2}</h5>
<div class="cartAdd d-flex">
            <button id="add15" type="button" class="btn btn-primary">+</button>
            <input id="cartInput15"  class="cartInput"type="number" disabled="disabled" />
           <button id="remove15" type="button" class="btn btn-primary">-</button>
            </div>
            <div id="danger15" class="Danger">
            <button type="button" class="delete btn btn-danger my-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
          </svg></button>
            </div>
            </div>
      `;

      cartBody.appendChild(cartItem);
      document.getElementById("cartInput15").value = 1;
      const removeBtn = document.getElementById("remove15");
      removeBtn.disabled = true;

      document.getElementById("add15").addEventListener("click", () => {
        document.getElementById("cartInput15").value =
          parseInt(document.getElementById("cartInput15").value) + 1;
        let newprice =
          parseInt(props.price2) *
          parseInt(document.getElementById("cartInput15").value);
        document.querySelector(".price-15").innerHTML = `₹${newprice}`;
        removeBtn.disabled = false;
      });

      document.getElementById("remove15").addEventListener("click", () => {
        if (parseInt(document.getElementById("cartInput15").value) > 1) {
          document.getElementById("cartInput15").value =
            parseInt(document.getElementById("cartInput15").value) - 1;
          let newprice =
            parseInt(props.price2) *
            parseInt(document.getElementById("cartInput15").value);
          document.querySelector(".price-15").innerHTML = `₹${newprice}`;
        }
        if (parseInt(document.getElementById("cartInput15").value) <= 1) {
          removeBtn.disabled = true;
        }
      });

      document.getElementById('fifteen').innerHTML = "Added"
      document.getElementById('fifteen').disabled = true

    } else if (props.cart === "sixteen") {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cartStyle", "my-3");
      cartItem.innerHTML = `
            <img src=${props.image16} class="img-fluid rounded-start productImg" alt="..." />
          </div>
          <div class="col-md-8 mx-2">
            <div class="card-body">
              <h5 class="card-title">${props.title16}</h5>
              
              
              <h5 class="price-16 card-title my-2" style="font-weight: 300">₹${props.price2}</h5>
<div class="cartAdd d-flex">
            <button id="add16" type="button" class="btn btn-primary">+</button>
            <input id="cartInput16"  class="cartInput"type="number" disabled="disabled" />
           <button id="remove16" type="button" class="btn btn-primary">-</button>
            </div>
            <div id="danger16" class="Danger">
            <button type="button" class="delete btn btn-danger my-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
          </svg></button>
            </div>
            </div>
      `;

      cartBody.appendChild(cartItem);
      document.getElementById("cartInput16").value = 1;
      const removeBtn = document.getElementById("remove16");
      removeBtn.disabled = true;

      document.getElementById("add16").addEventListener("click", () => {
        document.getElementById("cartInput16").value =
          parseInt(document.getElementById("cartInput16").value) + 1;
        let newprice =
          parseInt(props.price2) *
          parseInt(document.getElementById("cartInput16").value);
        document.querySelector(".price-16").innerHTML = `₹${newprice}`;
        removeBtn.disabled = false;
      });

      document.getElementById("remove16").addEventListener("click", () => {
        if (parseInt(document.getElementById("cartInput16").value) > 1) {
          document.getElementById("cartInput16").value =
            parseInt(document.getElementById("cartInput16").value) - 1;
          let newprice =
            parseInt(props.price2) *
            parseInt(document.getElementById("cartInput16").value);
          document.querySelector(".price-16").innerHTML = `₹${newprice}`;
        }
        if (parseInt(document.getElementById("cartInput16").value) <= 1) {
          removeBtn.disabled = true;
        }
      });

      document.getElementById('sixteen').innerHTML = "Added"
      document.getElementById('sixteen').disabled = true
    }
  };


  // Delete Button Function 



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
        <div class="card-body mx-2">
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
        <div class="offcanvas-body" style={{ margin: "10px" }}>
          {/* <div className="cartData"> */}
          <div id="cartBody" class="col-md-4 my-3 mx-2">
            {/* <img src={props.image} class="img-fluid rounded-start productImg" alt="..." />
          </div>
          <div class="col-md-8 mx-2">
            <div class="card-body">
              <h5 class="card-title">{props.title}</h5>
              
            </div>*/}
          </div>
          <div className="pay">
          <button class="success button-29" role="button">Buy Now</button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
