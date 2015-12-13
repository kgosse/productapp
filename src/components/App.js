import React, { Component } from 'react';
import Slider from 'react-slick';

export default class App extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            className: 'slider_product',
            arrows: true,
            adaptiveHeight: true
        };
        return (
            <div className='slider'>
                <div className='slider__title'>Les meilleurs produits de beauté de 2015</div>
                <Slider {...settings}>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                    <div><h3>5</h3></div>
                    <div><h3>6</h3></div>
                </Slider>
            </div>
        );
    }
}
