import React from 'react';
var img1="./growth.jpg";
var img2="./growth.jpg";
var img3="./growth.jpg";
const Services = () => {
    return (
        <div>
            <div class="container-fluid bg-dark" id="services">
        <div class="services">
            <div class="row justify-content-center mt-2">
                <div class="col-12 text-light text-center mt-2">
                    <h3>Our Services</h3>
                </div>
            </div>
            <div class="row justify-content-center mt-3">
                <div class="col-md-6 text-center">
                    <p class="text-light">
                        We are a certified home kitchen in Quincy California.I hope you have some great memories of
                        homemade
                        baked goods, where the scent of fresh-baked bread or chocolate chip cookies came from a kitchen
                        with
                        people who loved and cared about you.
                        I hope that you feel that way with every order you receive from Ram’s Bakery.
                    </p>
                </div>
            </div>
            <div class="row mt-4 justify-content-center">
                <div class="col-md-2">
                    <img src={img3}
                        alt="" class="img-fluid"/>
                    <h5 class="text-center text-secondary">Home Delivery</h5>
                    <p class="text-light text-center">
                        Delivery slots permitting, a home food drop is less risky than a trip to a supermarket as you
                        will avoid other shoppers.
                    </p>
                </div>
                <div class="col-md-2">
                    <img src={img2} alt=""
                        class="img-fluid"/>
                    <h5 class="text-center text-secondary">Our Clients</h5>
                    <p class="text-light text-center">
                        A client review is a potential stage of the translation process whereby an internal native
                        speaker on the client side reviews the completed output by the translation provider.
                    </p>
                </div>
                <div class="col-md-2">
                    <img src={img1} alt=""
                        class="img-fluid"/>
                    <h5 class="text-center text-secondary">Growth of clients</h5>
                    <p class="text-light text-center">
                        We have increased our network of services so rapidly in past few years. We also
                        have positive reports given by our clients.
                    </p>
                </div>
            </div>
        </div>
    </div>
        </div>
    );
};

export default Services;