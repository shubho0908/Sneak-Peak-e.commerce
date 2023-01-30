import "../App.css";
import React, {useState} from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false)
  const [Navbar, setNavbar] = useState("navbar navbar-expand-lg bg-body-tertiary")

  const DarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.body.style.backgroundColor = "#0c242b"
      document.body.style.color = "white"
      setNavbar("navbar navbar-expand-lg navbar-dark bg-dark")
      document.getElementById('1').style.backgroundColor = "#0e384b"
      document.getElementById('2').style.backgroundColor = "#0e384b"
      document.getElementById('3').style.backgroundColor = "#0e384b"
      document.getElementById('4').style.backgroundColor = "#0e384b"
      document.getElementById('5').style.backgroundColor = "#0e384b"
      document.getElementById('6').style.backgroundColor = "#0e384b"
      document.getElementById('7').style.backgroundColor = "#0e384b"
      document.getElementById('8').style.backgroundColor = "#0e384b"
      document.getElementById('9').style.backgroundColor = "#0e384b"
      document.getElementById('10').style.backgroundColor = "#0e384b"
      document.getElementById('11').style.backgroundColor = "#0e384b"
      document.getElementById('12').style.backgroundColor = "#0e384b"
      document.getElementById('13').style.backgroundColor = "#0e384b"
      document.getElementById('14').style.backgroundColor = "#0e384b"
      document.getElementById('15').style.backgroundColor = "#0e384b"
      document.getElementById('16').style.backgroundColor = "#0e384b"

    }
    else{
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      setNavbar("navbar navbar-expand-lg bg-body-tertiary")
      document.getElementById('1').style.backgroundColor = "white"
      document.getElementById('2').style.backgroundColor = "white"
      document.getElementById('3').style.backgroundColor = "white"
      document.getElementById('4').style.backgroundColor = "white"
      document.getElementById('5').style.backgroundColor = "white"
      document.getElementById('6').style.backgroundColor = "white"
      document.getElementById('7').style.backgroundColor = "white"
      document.getElementById('8').style.backgroundColor = "white"
      document.getElementById('9').style.backgroundColor = "white"
      document.getElementById('10').style.backgroundColor = "white"
      document.getElementById('11').style.backgroundColor = "white"
      document.getElementById('12').style.backgroundColor = "white"
      document.getElementById('13').style.backgroundColor = "white"
      document.getElementById('14').style.backgroundColor = "white"
      document.getElementById('15').style.backgroundColor = "white"
      document.getElementById('16').style.backgroundColor = "white"

    }
  }

  
  return (
    <>
    <nav id='mainnav' class={Navbar}>
  <div class="container-fluid ">
    <a class="navbar-brand">Sneak-Peak</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ">
        <Link class="nav-link" aria-current="page" to="/">Home</Link>
        <Link class="nav-link" to="/about">About Us</Link>
        <h1 id="mycart" class="nav-link" style={{position:"absolute",right:"95px"}}
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBothOptions"
              aria-controls="offcanvasWithBothOptions"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg></h1>
        <h1 id='dark' class="nav-link" style={{position:"absolute",right:"35px"}} onClick={DarkMode}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-moon-stars-fill" viewBox="0 0 16 16">
  <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
  <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
</svg></h1>

      </div>
    </div>
  </div>
</nav>
    </>
  )
}
