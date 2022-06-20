import React from 'react';

const Mygallery = () => {
    return (
        <div>
              <div class="container Gallery p-2 mt-4" id="gallery">
        <div class="row justify-content-center">
            <div class="col-12 text-center">
                <h2 class="text-danger mt-2">My Gallery</h2>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-md-4  style" >
                <div class="images">

                    <img src="https://www.bakemag.com/ext/resources/images/2019/9/DessertGallery3.jpg?1567710389" alt=""
                        class="img-fluid imd-thumbnail rounded mt-2 b" />
                    <h2 class="text-center mt-2 text-light">Pastry</h2>
                </div>
            </div>
            <div class="col-md-4 style" >
                <div class="images">
                    <img src="https://www.alessibakery.com/wp-content/uploads/2018/04/Matt-Sierra-Cross-Creek-Ranch-Wedding-Reception-0026.jpg"
                        alt="" class="img-fluid imd-thumbnail rounded mt-2 b" />
                    <h2 class="text-center mt-2 text-light">Wedding Cake</h2>
                </div>
            </div>
            <div class="col-md-4 style" >
                <div class="images">
                    <img src="https://images.adsttc.com/media/images/5007/394e/28ba/0d41/4800/171e/large_jpg/stringio.jpg?1414028096"
                        alt="" class="img-fluid imd-thumbnail rounded mt-2 b" />
                    <h2 class="text-center mt-2 text-light">Our Bakery</h2>
                </div>
            </div>
        </div>
    </div>
        </div>
    );
};

export default Mygallery;