import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer class="footer-distributed mt-3 bg-secondary" >
        <div class="footer-left">
           <h3> Ram's Bakery</h3>
           <p class="footer-company-name ml-2 mt-3">Ram's bakery &copy; 2021</p>
        </div>
        <div class="footer-center mt-3">
            <div>
                <i class="fa fa-map-marker"></i>
                <p><span>21 Revolution Street</span> Delhi, India</p>
                </div>
                
                <div>
                <i class="fa fa-phone"></i>
                <p>+1 555 123456</p>
                </div>
                
                <div>
                <i class="fa fa-envelope"></i>
                <p><a href="mailto:rams@company.com">contact@rams_bakery.com</a></p>
                </div>
        </div>
        <div class="footer-right mt-3">
 
            <p class="footer-company-about">
            <span>About the company</span>
            Ram's bakery provides freshly made cake &amp; many more home made products at reasonable price.
            </p>
            
            <div class="footer-icons">
            
            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-linkedin"></i></a>
            <a href="#"><i class="fa fa-github"></i></a>
            
            </div>
            
            </div>
    </footer>
        </div>
    );
};

export default Footer;