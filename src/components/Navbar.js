import React from 'react'

export default function Navbar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary " style={{height:"70px"}}>
  <div class="container-fluid ">
    <a class="navbar-brand" href="#">SneakShop</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item mx-3">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item mx-3">
          <a class="nav-link" href="/men">Men</a>
        </li>
        <li class="nav-item mx-3">
          <a class="nav-link" href="/women">Women</a>
        </li>
        <li class="nav-item mx-3">
          <a class="nav-link" href='/kids'>Kids</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
