require('../styles/lib/slick.css');
require('../styles/lib/slick-theme.css');

import React, { Component } from 'react';
import Slider from 'react-slick';

export default class App extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            className: 'slider__products',
            arrows: true,
            autoplay: true
        };
        let products = [];
        for (var i = 1; i <= 6; ++i)
            products.push(<div className='slider__products__product' key={i}><h3>{i}</h3></div>)
        return (
            <div className='slider'>
                <div className='slider__title'>Les meilleurs produits de beauté de 2015</div>
                <Slider {...settings}>
                    {products}
                </Slider>
            </div>
        );
    }
}
