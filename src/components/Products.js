import "../App.css";
import React from "react";
import rating from "./img/rating.png";

export default function Products(props) {
  const Check = () => {
    const cartBody = document.getElementById("cartBody");
    // Nike Shoes Functions


    if (props.cart === "one") {

      const cartItem = document.createElement("div");
      cartItem.classList.add('cartStyle')
      
      cartItem.innerHTML = `
            <img src=${props.image1} class="img-fluid rounded-start productImg" alt="..." />
          </div>
          <div class="col-md-8 mx-2">
            <div class="card-body">
            <h5 class="card-title">${props.title1}</h5>
            <h5 class="price card-title my-2">₹${props.price2}</h5>
            <div class="cartAdd d-flex">
            <button id="add" type="button" class="btn btn-primary">+</button>
            <input id="cartInput" type="number" disabled="disabled" />
           <button id="remove" type="button" class="btn btn-primary">-</button>
            </div>

             
            </div>
      `

      cartBody.appendChild(cartItem);

      document.getElementById('cartInput').value = 1;
      const removeBtn = document.getElementById('remove');
      removeBtn.disabled = false;
      
      document.getElementById('add').addEventListener('click', () => {
        document.getElementById('cartInput').value = parseInt(document.getElementById('cartInput').value) + 1;
        let newprice = (parseInt(props.price2))* parseInt(document.getElementById('cartInput').value)
        document.querySelector('.price').innerHTML = `₹${newprice}`
        removeBtn.disabled = false;
      });
      
      document.getElementById('remove').addEventListener('click', () => {
        if (parseInt(document.getElementById('cartInput').value) > 1) {
          document.getElementById('cartInput').value = parseInt(document.getElementById('cartInput').value) - 1;
          let newprice = (parseInt(props.price2))* parseInt(document.getElementById('cartInput').value)
          document.querySelector('.price').innerHTML = `₹${newprice}`
        }
        if (parseInt(document.getElementById('cartInput').value) <= 1) {
          removeBtn.disabled = true;
        } });
      
    } else if (props.cart === "two") {
      const cartItem = document.createElement("div");
      cartItem.innerHTML = `
            <img src=${props.image2} class="img-fluid rounded-start productImg" alt="..." />
          </div>
          <div class="col-md-8 mx-2">
            <div class="card-body">
              <h5 class="card-title">${props.title2}</h5>
              
              
              <h5 class="price card-title my-2">₹${props.price2}</h5>
<div class="cartAdd d-flex">
            <button id="add" type="button" class="btn btn-primary">+</button>
            <input id="cartInput" type="number" disabled="disabled" />
           <button id="remove" type="button" class="btn btn-primary">-</button>
            </div>
            </div>
      `
      cartBody.appendChild(cartItem);


      document.getElementById('cartInput').value = 1;
      const removeBtn = document.getElementById('remove');
      removeBtn.disabled = false;
      
      document.getElementById('add').addEventListener('click', () => {
        document.getElementById('cartInput').value = parseInt(document.getElementById('cartInput').value) + 1;
        let newprice = (parseInt(props.price2))* parseInt(document.getElementById('cartInput').value)
        document.querySelector('.price').innerHTML = `₹${newprice}`
        removeBtn.disabled = false;
      });
      
      document.getElementById('remove').addEventListener('click', () => {
        if (parseInt(document.getElementById('cartInput').value) > 1) {
          document.getElementById('cartInput').value = parseInt(document.getElementById('cartInput').value) - 1;
          let newprice = (parseInt(props.price2))* parseInt(document.getElementById('cartInput').value)
          document.querySelector('.price').innerHTML = `₹${newprice}`
        }
        if (parseInt(document.getElementById('cartInput').value) <= 1) {
          removeBtn.disabled = true;
        } });
    } else if (props.cart === "three") {
      document.getElementById("cartBody").innerHTML = `
            <img src=${props.image3} class="img-fluid rounded-start productImg" alt="..." />
          </div>
          <div class="col-md-8 mx-2">
            <div class="card-body">
              <h5 class="card-title">${props.title3}</h5>
              
              
              <h5 class="price card-title my-2">₹${props.price2}</h5>
<div class="cartAdd d-flex">
            <button id="add" type="button" class="btn btn-primary">+</button>
            <input id="cartInput" type="number" disabled="disabled" />
           <button id="remove" type="button" class="btn btn-primary">-</button>
            </div>
            </div>
      `

      document.getElementById('cartInput').value = 1;
      const removeBtn = document.getElementById('remove');
      removeBtn.disabled = false;
      
      document.getElementById('add').addEventListener('click', () => {
        document.getElementById('cartInput').value = parseInt(document.getElementById('cartInput').value) + 1;
        let newprice = (parseInt(props.price2))* parseInt(document.getElementById('cartInput').value)
        document.querySelector('.price').innerHTML = `₹${newprice}`
        removeBtn.disabled = false;
      });
      
      document.getElementById('remove').addEventListener('click', () => {
        if (parseInt(document.getElementById('cartInput').value) > 1) {
          document.getElementById('cartInput').value = parseInt(document.getElementById('cartInput').value) - 1;
          let newprice = (parseInt(props.price2))* parseInt(document.getElementById('cartInput').value)
          document.querySelector('.price').innerHTML = `₹${newprice}`
        }
        if (parseInt(document.getElementById('cartInput').value) <= 1) {
          removeBtn.disabled = true;
        } });
    } else if (props.cart === "four") {
      document.getElementById("cartBody").innerHTML = `
            <img src=${props.image4} class="img-fluid rounded-start productImg" alt="..." />
          </div>
          <div class="col-md-8 mx-2">
            <div class="card-body">
              <h5 class="card-title">${props.title4}</h5>
              
              
              <h5 class="price card-title my-2">₹${props.price2}</h5>
<div class="cartAdd d-flex">
            <button id="add" type="button" class="btn btn-primary">+</button>
            <input id="cartInput" type="number" disabled="disabled" />
           <button id="remove" type="button" class="btn btn-primary">-</button>
            </div>
            </div>
      `

      document.getElementById('cartInput').value = 1;
      const removeBtn = document.getElementById('remove');
      removeBtn.disabled = false;
      
      document.getElementById('add').addEventListener('click', () => {
        document.getElementById('cartInput').value = parseInt(document.getElementById('cartInput').value) + 1;
        let newprice = (parseInt(props.price2))* parseInt(document.getElementById('cartInput').value)
        document.querySelector('.price').innerHTML = `₹${newprice}`
        removeBtn.disabled = false;
      });
      
      document.getElementById('remove').addEventListener('click', () => {
        if (parseInt(document.getElementById('cartInput').value) > 1) {
          document.getElementById('cartInput').value = parseInt(document.getElementById('cartInput').value) - 1;
          let newprice = (parseInt(props.price2))* parseInt(document.getElementById('cartInput').value)
          document.querySelector('.price').innerHTML = `₹${newprice}`
        }
        if (parseInt(document.getElementById('cartInput').value) <= 1) {
          removeBtn.disabled = true;
        } });
    } else if (props.cart === "five") {
      document.getElementById("cartBody").innerHTML = `
            <img src=${props.image5} class="img-fluid rounded-start productImg" alt="..." />
          </div>
          <div class="col-md-8 mx-2">
            <div class="card-body">
              <h5 class="card-title">${props.title5}</h5>
              
              
              <h5 class="price card-title my-2">₹${props.price2}</h5>
<div class="cartAdd d-flex">
            <button id="add" type="button" class="btn btn-primary">+</button>
            <input id="cartInput" type="number" disabled="disabled" />
           <button id="remove" type="button" class="btn btn-primary">-</button>
            </div>
            </div>
      `

      document.getElementById('cartInput').value = 1;
      const removeBtn = document.getElementById('remove');
      removeBtn.disabled = false;
      
      document.getElementById('add').addEventListener('click', () => {
        document.getElementById('cartInput').value = parseInt(document.getElementById('cartInput').value) + 1;
        let newprice = (parseInt(props.price2))* parseInt(document.getElementById('cartInput').value)
        document.querySelector('.price').innerHTML = `₹${newprice}`
        removeBtn.disabled = false;
      });
      
      document.getElementById('remove').addEventListener('click', () => {
        if (parseInt(document.getElementById('cartInput').value) > 1) {
          document.getElementById('cartInput').value = parseInt(document.getElementById('cartInput').value) - 1;
          let newprice = (parseInt(props.price2))* parseInt(document.getElementById('cartInput').value)
          document.querySelector('.price').innerHTML = `₹${newprice}`
        }
        if (parseInt(document.getElementById('cartInput').value) <= 1) {
          removeBtn.disabled = true;
        } });
    } else if (props.cart === "six") {
      document.getElementById("cartBody").innerHTML = `
            <img src=${props.image6} class="img-fluid rounded-start productImg" alt="..." />
          </div>
          <div class="col-md-8 mx-2">
            <div class="card-body">
              <h5 class="card-title">${props.title6}</h5>
              
              
              <h5 class="price card-title my-2">₹${props.price2}</h5>
<div class="cartAdd d-flex">
            <button id="add" type="button" class="btn btn-primary">+</button>
            <input id="cartInput" type="number" disabled="disabled" />
           <button id="remove" type="button" class="btn btn-primary">-</button>
            </div>
            </div>
      `

      document.getElementById('cartInput').value = 1;
      const removeBtn = document.getElementById('remove');
      removeBtn.disabled = false;
      
      document.getElementById('add').addEventListener('click', () => {
        document.getElementById('cartInput').value = parseInt(document.getElementById('cartInput').value) + 1;
        let newprice = (parseInt(props.price2))* parseInt(document.getElementById('cartInput').value)
        document.querySelector('.price').innerHTML = `₹${newprice}`
        removeBtn.disabled = false;
      });
      
      document.getElementById('remove').addEventListener('click', () => {
        if (parseInt(document.getElementById('cartInput').value) > 1) {
          document.getElementById('cartInput').value = parseInt(document.getElementById('cartInput').value) - 1;
          let newprice = (parseInt(props.price2))* parseInt(document.getElementById('cartInput').value)
          document.querySelector('.price').innerHTML = `₹${newprice}`
        }
        if (parseInt(document.getElementById('cartInput').value) <= 1) {
          removeBtn.disabled = true;
        } });
    } else if (props.cart === "seven") {
      document.getElementById("cartBody").innerHTML = `
            <img src=${props.image7} class="img-fluid rounded-start productImg" alt="..." />
          </div>
          <div class="col-md-8 mx-2">
            <div class="card-body">
              <h5 class="card-title">${props.title7}</h5>
              
              
              <h5 class="price card-title my-2">₹${props.price2}</h5>
<div class="cartAdd d-flex">
            <button id="add" type="button" class="btn btn-primary">+</button>
            <input id="cartInput" type="number" disabled="disabled" />
           <button id="remove" type="button" class="btn btn-primary">-</button>
            </div>
            </div>
      `

      document.getElementById('cartInput').value = 1;
      const removeBtn = document.getElementById('remove');
      removeBtn.disabled = false;
      
      document.getElementById('add').addEventListener('click', () => {
        document.getElementById('cartInput').value = parseInt(document.getElementById('cartInput').value) + 1;
        let newprice = (parseInt(props.price2))* parseInt(document.getElementById('cartInput').value)
        document.querySelector('.price').innerHTML = `₹${newprice}`
        removeBtn.disabled = false;
      });
      
      document.getElementById('remove').addEventListener('click', () => {
        if (parseInt(document.getElementById('cartInput').value) > 1) {
          document.getElementById('cartInput').value = parseInt(document.getElementById('cartInput').value) - 1;
          let newprice = (parseInt(props.price2))* parseInt(document.getElementById('cartInput').value)
          document.querySelector('.price').innerHTML = `₹${newprice}`
        }
        if (parseInt(document.getElementById('cartInput').value) <= 1) {
          removeBtn.disabled = true;
        } });
    } else if (props.cart === "eight") {
      document.getElementById("cartBody").innerHTML = `
            <img src=${props.image8} class="img-fluid rounded-start productImg" alt="..." />
          </div>
          <div class="col-md-8 mx-2">
            <div class="card-body">
              <h5 class="card-title">${props.title8}</h5>
              
              
              <h5 class="price card-title my-2">₹${props.price2}</h5>
<div class="cartAdd d-flex">
            <button id="add" type="button" class="btn btn-primary">+</button>
            <input id="cartInput" type="number" disabled="disabled" />
           <button id="remove" type="button" class="btn btn-primary">-</button>
            </div>
            </div>
      `

      document.getElementById('cartInput').value = 1;
      const removeBtn = document.getElementById('remove');
      removeBtn.disabled = false;
      
      document.getElementById('add').addEventListener('click', () => {
        document.getElementById('cartInput').value = parseInt(document.getElementById('cartInput').value) + 1;
        let newprice = (parseInt(props.price2))* parseInt(document.getElementById('cartInput').value)
        document.querySelector('.price').innerHTML = `₹${newprice}`
        removeBtn.disabled = false;
      });
      
      document.getElementById('remove').addEventListener('click', () => {
        if (parseInt(document.getElementById('cartInput').value) > 1) {
          document.getElementById('cartInput').value = parseInt(document.getElementById('cartInput').value) - 1;
          let newprice = (parseInt(props.price2))* parseInt(document.getElementById('cartInput').value)
          document.querySelector('.price').innerHTML = `₹${newprice}`
        }
        if (parseInt(document.getElementById('cartInput').value) <= 1) {
          removeBtn.disabled = true;
        } });
    } else if (props.cart === "nine") {
      document.getElementById("cartBody").innerHTML = `
            <img src=${props.image9} class="img-fluid rounded-start productImg" alt="..." />
          </div>
          <div class="col-md-8 mx-2">
            <div class="card-body">
              <h5 class="card-title">${props.title9}</h5>
              
              
              <h5 class="price card-title my-2">₹${props.price2}</h5>
<div class="cartAdd d-flex">
            <button id="add" type="button" class="btn btn-primary">+</button>
            <input id="cartInput" type="number" disabled="disabled" />
           <button id="remove" type="button" class="btn btn-primary">-</button>
            </div>
            </div>
      `

      document.getElementById('cartInput').value = 1;
      const removeBtn = document.getElementById('remove');
      removeBtn.disabled = false;
      
      document.getElementById('add').addEventListener('click', () => {
        document.getElementById('cartInput').value = parseInt(document.getElementById('cartInput').value) + 1;
        let newprice = (parseInt(props.price2))* parseInt(document.getElementById('cartInput').value)
        document.querySelector('.price').innerHTML = `₹${newprice}`
        removeBtn.disabled = false;
      });
      
      document.getElementById('remove').addEventListener('click', () => {
        if (parseInt(document.getElementById('cartInput').value) > 1) {
          document.getElementById('cartInput').value = parseInt(document.getElementById('cartInput').value) - 1;
          let newprice = (parseInt(props.price2))* parseInt(document.getElementById('cartInput').value)
          document.querySelector('.price').innerHTML = `₹${newprice}`
        }
        if (parseInt(document.getElementById('cartInput').value) <= 1) {
          removeBtn.disabled = true;
        } });
    } else if (props.cart === "ten") {
      document.getElementById("cartBody").innerHTML = `
            <img src=${props.image10} class="img-fluid rounded-start productImg" alt="..." />
          </div>
          <div class="col-md-8 mx-2">
            <div class="card-body">
              <h5 class="card-title">${props.title10}</h5>
              
              
              <h5 class="price card-title my-2">₹${props.price2}</h5>
<div class="cartAdd d-flex">
            <button id="add" type="button" class="btn btn-primary">+</button>
            <input id="cartInput" type="number" disabled="disabled" />
           <button id="remove" type="button" class="btn btn-primary">-</button>
            </div>
            </div>
      `

      document.getElementById('cartInput').value = 1;
      const removeBtn = document.getElementById('remove');
      removeBtn.disabled = false;
      
      document.getElementById('add').addEventListener('click', () => {
        document.getElementById('cartInput').value = parseInt(document.getElementById('cartInput').value) + 1;
        let newprice = (parseInt(props.price2))* parseInt(document.getElementById('cartInput').value)
        document.querySelector('.price').innerHTML = `₹${newprice}`
        removeBtn.disabled = false;
      });
      
      document.getElementById('remove').addEventListener('click', () => {
        if (parseInt(document.getElementById('cartInput').value) > 1) {
          document.getElementById('cartInput').value = parseInt(document.getElementById('cartInput').value) - 1;
          let newprice = (parseInt(props.price2))* parseInt(document.getElementById('cartInput').value)
          document.querySelector('.price').innerHTML = `₹${newprice}`
        }
        if (parseInt(document.getElementById('cartInput').value) <= 1) {
          removeBtn.disabled = true;
        } });
    } else if (props.cart === "eleven") {
      document.getElementById("cartBody").innerHTML = `
            <img src=${props.image11} class="img-fluid rounded-start productImg" alt="..." />
          </div>
          <div class="col-md-8 mx-2">
            <div class="card-body">
              <h5 class="card-title">${props.title11}</h5>
              
              
              <h5 class="price card-title my-2">₹${props.price2}</h5>
<div class="cartAdd d-flex">
            <button id="add" type="button" class="btn btn-primary">+</button>
            <input id="cartInput" type="number" disabled="disabled" />
           <button id="remove" type="button" class="btn btn-primary">-</button>
            </div>
            </div>
      `

      document.getElementById('cartInput').value = 1;
      const removeBtn = document.getElementById('remove');
      removeBtn.disabled = false;
      
      document.getElementById('add').addEventListener('click', () => {
        document.getElementById('cartInput').value = parseInt(document.getElementById('cartInput').value) + 1;
        let newprice = (parseInt(props.price2))* parseInt(document.getElementById('cartInput').value)
        document.querySelector('.price').innerHTML = `₹${newprice}`
        removeBtn.disabled = false;
      });
      
      document.getElementById('remove').addEventListener('click', () => {
        if (parseInt(document.getElementById('cartInput').value) > 1) {
          document.getElementById('cartInput').value = parseInt(document.getElementById('cartInput').value) - 1;
          let newprice = (parseInt(props.price2))* parseInt(document.getElementById('cartInput').value)
          document.querySelector('.price').innerHTML = `₹${newprice}`
        }
        if (parseInt(document.getElementById('cartInput').value) <= 1) {
          removeBtn.disabled = true;
        } });
    } else if (props.cart === "twelve") {
      document.getElementById("cartBody").innerHTML = `
            <img src=${props.image12} class="img-fluid rounded-start productImg" alt="..." />
          </div>
          <div class="col-md-8 mx-2">
            <div class="card-body">
              <h5 class="card-title">${props.title12}</h5>
              
              
              <h5 class="price card-title my-2">₹${props.price2}</h5>
<div class="cartAdd d-flex">
            <button id="add" type="button" class="btn btn-primary">+</button>
            <input id="cartInput" type="number" disabled="disabled" />
           <button id="remove" type="button" class="btn btn-primary">-</button>
            </div>
            </div>
      `

      document.getElementById('cartInput').value = 1;
      const removeBtn = document.getElementById('remove');
      removeBtn.disabled = false;
      
      document.getElementById('add').addEventListener('click', () => {
        document.getElementById('cartInput').value = parseInt(document.getElementById('cartInput').value) + 1;
        let newprice = (parseInt(props.price2))* parseInt(document.getElementById('cartInput').value)
        document.querySelector('.price').innerHTML = `₹${newprice}`
        removeBtn.disabled = false;
      });
      
      document.getElementById('remove').addEventListener('click', () => {
        if (parseInt(document.getElementById('cartInput').value) > 1) {
          document.getElementById('cartInput').value = parseInt(document.getElementById('cartInput').value) - 1;
          let newprice = (parseInt(props.price2))* parseInt(document.getElementById('cartInput').value)
          document.querySelector('.price').innerHTML = `₹${newprice}`
        }
        if (parseInt(document.getElementById('cartInput').value) <= 1) {
          removeBtn.disabled = true;
        } });
    } else if (props.cart === "thirteen") {
      document.getElementById("cartBody").innerHTML = `
            <img src=${props.image13} class="img-fluid rounded-start productImg" alt="..." />
          </div>
          <div class="col-md-8 mx-2">
            <div class="card-body">
              <h5 class="card-title">${props.title13}</h5>
              
              
              <h5 class="price card-title my-2">₹${props.price2}</h5>
<div class="cartAdd d-flex">
            <button id="add" type="button" class="btn btn-primary">+</button>
            <input id="cartInput" type="number" disabled="disabled" />
           <button id="remove" type="button" class="btn btn-primary">-</button>
            </div>
            </div>
      `

      document.getElementById('cartInput').value = 1;
      const removeBtn = document.getElementById('remove');
      removeBtn.disabled = false;
      
      document.getElementById('add').addEventListener('click', () => {
        document.getElementById('cartInput').value = parseInt(document.getElementById('cartInput').value) + 1;
        let newprice = (parseInt(props.price2))* parseInt(document.getElementById('cartInput').value)
        document.querySelector('.price').innerHTML = `₹${newprice}`
        removeBtn.disabled = false;
      });
      
      document.getElementById('remove').addEventListener('click', () => {
        if (parseInt(document.getElementById('cartInput').value) > 1) {
          document.getElementById('cartInput').value = parseInt(document.getElementById('cartInput').value) - 1;
          let newprice = (parseInt(props.price2))* parseInt(document.getElementById('cartInput').value)
          document.querySelector('.price').innerHTML = `₹${newprice}`
        }
        if (parseInt(document.getElementById('cartInput').value) <= 1) {
          removeBtn.disabled = true;
        } });
    } else if (props.cart === "fourteen") {
      document.getElementById("cartBody").innerHTML = `
            <img src=${props.image14} class="img-fluid rounded-start productImg" alt="..." />
          </div>
          <div class="col-md-8 mx-2">
            <div class="card-body">
              <h5 class="card-title">${props.title14}</h5>
              
              
              <h5 class="price card-title my-2">₹${props.price2}</h5>
<div class="cartAdd d-flex">
            <button id="add" type="button" class="btn btn-primary">+</button>
            <input id="cartInput" type="number" disabled="disabled" />
           <button id="remove" type="button" class="btn btn-primary">-</button>
            </div>
            </div>
      `

      document.getElementById('cartInput').value = 1;
      const removeBtn = document.getElementById('remove');
      removeBtn.disabled = false;
      
      document.getElementById('add').addEventListener('click', () => {
        document.getElementById('cartInput').value = parseInt(document.getElementById('cartInput').value) + 1;
        let newprice = (parseInt(props.price2))* parseInt(document.getElementById('cartInput').value)
        document.querySelector('.price').innerHTML = `₹${newprice}`
        removeBtn.disabled = false;
      });
      
      document.getElementById('remove').addEventListener('click', () => {
        if (parseInt(document.getElementById('cartInput').value) > 1) {
          document.getElementById('cartInput').value = parseInt(document.getElementById('cartInput').value) - 1;
          let newprice = (parseInt(props.price2))* parseInt(document.getElementById('cartInput').value)
          document.querySelector('.price').innerHTML = `₹${newprice}`
        }
        if (parseInt(document.getElementById('cartInput').value) <= 1) {
          removeBtn.disabled = true;
        } });
    } else if (props.cart === "fifteen") {
      document.getElementById("cartBody").innerHTML = `
            <img src=${props.image15} class="img-fluid rounded-start productImg" alt="..." />
          </div>
          <div class="col-md-8 mx-2">
            <div class="card-body">
              <h5 class="card-title">${props.title15}</h5>
              
              </div>
              <h5 class="price card-title my-2">₹${props.price2}</h5>
<div class="cartAdd d-flex">
            <button id="add" type="button" class="btn btn-primary">+</button>
            <input id="cartInput" type="number" disabled="disabled" />
           <button id="remove" type="button" class="btn btn-primary">-</button>
            </div>
      `

      document.getElementById('cartInput').value = 1;
      const removeBtn = document.getElementById('remove');
      removeBtn.disabled = false;
      
      document.getElementById('add').addEventListener('click', () => {
        document.getElementById('cartInput').value = parseInt(document.getElementById('cartInput').value) + 1;
        let newprice = (parseInt(props.price2))* parseInt(document.getElementById('cartInput').value)
        document.querySelector('.price').innerHTML = `₹${newprice}`
        removeBtn.disabled = false;
      });
      
      document.getElementById('remove').addEventListener('click', () => {
        if (parseInt(document.getElementById('cartInput').value) > 1) {
          document.getElementById('cartInput').value = parseInt(document.getElementById('cartInput').value) - 1;
          let newprice = (parseInt(props.price2))* parseInt(document.getElementById('cartInput').value)
          document.querySelector('.price').innerHTML = `₹${newprice}`
        }
        if (parseInt(document.getElementById('cartInput').value) <= 1) {
          removeBtn.disabled = true;
        } });

    } else if (props.cart === "sixteen") {
      document.getElementById("cartBody").innerHTML = `
            <img src=${props.image16} class="img-fluid rounded-start productImg" alt="..." />
          </div>
          <div class="col-md-8 mx-2">
            <div class="card-body">
              <h5 class="card-title">${props.title16}</h5>
              
              
              <h5 class="price card-title my-2">₹${props.price2}</h5>
<div class="cartAdd d-flex">
            <button id="add" type="button" class="btn btn-primary">+</button>
            <input id="cartInput" type="number" disabled="disabled" />
           <button id="remove" type="button" class="btn btn-primary">-</button>
            </div>
            </div>
      `

      document.getElementById('cartInput').value = 1;
      const removeBtn = document.getElementById('remove');
      removeBtn.disabled = false;
      
      document.getElementById('add').addEventListener('click', () => {
        document.getElementById('cartInput').value = parseInt(document.getElementById('cartInput').value) + 1;
        let newprice = (parseInt(props.price2))* parseInt(document.getElementById('cartInput').value)
        document.querySelector('.price').innerHTML = `₹${newprice}`
        removeBtn.disabled = false;
      });
      
      document.getElementById('remove').addEventListener('click', () => {
        if (parseInt(document.getElementById('cartInput').value) > 1) {
          document.getElementById('cartInput').value = parseInt(document.getElementById('cartInput').value) - 1;
          let newprice = (parseInt(props.price2))* parseInt(document.getElementById('cartInput').value)
          document.querySelector('.price').innerHTML = `₹${newprice}`
        }
        if (parseInt(document.getElementById('cartInput').value) <= 1) {
          removeBtn.disabled = true;
        } });
    }
  };


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
          </div>
        </div>
      {/* </div> */}
    </>
  );
}
