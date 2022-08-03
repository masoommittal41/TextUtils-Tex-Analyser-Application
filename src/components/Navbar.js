import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <nav class={`navbar navbar-expand-lg bg-${props.mode}`}>
  <div class="container-fluid">
    <Link class={`navbar-brand text-${props.mode==='light'?'dark':'light'}`} to="/">TextUtils</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class={`nav-link active text-${props.mode==='light'?'dark':'light'}`} aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class={`nav-link text-${props.mode==='light'?'dark':'light'}`} to="/about">About</Link>
        </li>
      </ul>
      <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input class="form-check-input" type="checkbox" onClick={props.toggle} role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Enable {props.mode==='light'?'dark':'light'} Mode</label>
</div>
    </div>
  </div>
</nav>
  )
}
