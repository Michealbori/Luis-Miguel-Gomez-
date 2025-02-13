import React from 'react'
import "./Header.css"
import LuisAvatar from "/avatar.jpg"

export default function Header() {
  return (
    <>
        <header class="header">
        <a href="components.html" class="btn btn-primary btn-component" data-spy="affix" data-offset-top="600"><i class="ti-shift-left-alt"></i> Components</a>
    <div class="container">
        <ul class="social-icons pt-3">
            <li class="social-item"><a class="social-link text-light" href="https://www.facebook.com/Miguelon960?mibextid=LQQJ4d"><i class="ti-facebook" aria-hidden="true"></i></a></li>
            <li class="social-item"><a class="social-link text-light" href=""><i class="ti-twitter" aria-hidden="true"></i></a></li>
            <li class="social-item"><a class="social-link text-light" href="#"><i class="ti-email" aria-hidden="true"></i></a></li>
            <li class="social-item"><a class="social-link text-light" href="https://www.instagram.com/lumification/?utm_source=ig_web_button_share_sheet"><i class="ti-instagram" aria-hidden="true"></i></a></li>
            <li class="social-item"><a class="social-link text-light" href="https://www.linkedin.com/in/miguelon960/overlay/about-this-profile/?trk=public-profile-join-page&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BOAYsdezrSvySv07SZISV%2FA%3D%3D"><i class="ti-linkedin" aria-hidden="true"></i></a></li>
        </ul>  
        <div class="header-content">
            <h4 class="header-subtitle" >Hello, I am</h4>
            <h1 class="header-title" id='NameText'>Luis Miguel Gomez Zuluaga</h1>
            <h6 class="header-mono" > Project Engineer ⚡️| Data Analyst 💻 | Power systems</h6>
            <button class="btn btn-primary btn-rounded"><i class="ti-printer pr-2"></i>Print Resume</button>
        </div>
    </div>
</header>
<nav class="navbar sticky-top navbar-expand-lg navbar-light bg-white">
        <div class="container">
            <button class="navbar-toggler ml-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse mt-sm-20 navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a href="#home" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="#about" class="nav-link">About</a>
                    </li>
                    <li class="nav-item">
                        <a href="#resume" class="nav-link">Resume</a>
                    </li>
                </ul>
                <ul class="navbar-nav brand">
                    <img src="https://i.postimg.cc/qqjPmVjK/avatar.jpg" alt="LuisAvatar" class="brand-img" />
                    <li class="brand-txt">
                        <h5 class="brand-title">Luis Miguel Gomez Zuluaga</h5>
                        <div class="brand-subtitle">Project Engineer ⚡️| Data Analyst 💻 | Power systems</div>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a href="#portfolio" class="nav-link">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a href="#blog" class="nav-link">Blog</a>
                    </li>
                    <li class="nav-item last-item">
                        <a href="#contact" class="nav-link">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>

  )
}
