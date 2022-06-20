import React from 'react';
import Dis from './Dis';

const Header = () => {
    return (
        <div>
             <div class="container-fluid ml-0">
        <div class="row">
            <div class="col">
                <nav class="navbar navbar-expand-lg navbar-light fixed-top bg" >
                    <a href="" class="navbar-brand">
                        <img src="https://www.logodesign.net/logo/cupcake-with-fox-tail-5537ld.png" width="100px"
                            height="100px" alt=""/>
                    </a>
                    <button class="navbar-toggler ">
                        <span class="navbar-toggler-icon" data-toggle="collapse" data-target="#myNav"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="myNav">
                        <ul class="navbar-nav mr-auto navbar-nav-scroll navst" >
                            <li class="nav-item mx-2"><a href="" class="nav-link active">Home</a></li>
                            <li class="nav-item mx-2"><a href="#aboutus" class="nav-link">About Us</a></li>
                            <li class="nav-item mx-2"><a href="#gallery" class="nav-link">Gallery</a></li>
                            <li class="nav-item mx-2"><a href="#services" class="nav-link">Services</a></li>
                            <li class="nav-item mx-2"><a href="#order" class="nav-link">Contact Us</a></li>
                        </ul>
                        <form action="" class="form-inline">
                            <input type="search" class="form-control" placeholder="search"/>
                            <button class="btn btn-dark">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</div>
        
    );
};

export default Header;