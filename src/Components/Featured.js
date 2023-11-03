import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx';

function Featured() {

    const sliders = [
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg'
        },
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg'
        },
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg',
        },

    ]
    const [currentIndx, setCurrentIndx] = useState(0);
    const prevSlider = () => {
        const isFirstSlide = currentIndx === 0
        const newIndex = isFirstSlide ? sliders.length - 1 : currentIndx - 1
        setCurrentIndx(newIndex);
    }
    const nextSlider = () => {
        const isLastSlide = currentIndx === sliders.length - 1
        const newIndex = isLastSlide ? 0 : currentIndx + 1
        setCurrentIndx(newIndex)
    }
    const moveToSlide = (slideIndex) => {
        setCurrentIndx(slideIndex)
    }
    return (
        <div className='hero-slider'>
            <div className='inner-slider'
                style={{ backgroundImage: `url(${sliders[currentIndx].url})` }}
            ></div>
            <div className='arrow'
                style={{
                    position: 'absolute',
                    top: '50%', right: '1.5rem',
                    fontSize: '1.5rem', lineHeight: '1.5rem',
                    borderRadius: '100%', padding: '.5rem',
                    backgroundColor: 'rgba(194, 65, 12, 1)',
                    color: 'white', cursor: 'pointer'
                }} >
                <BsChevronCompactRight onClick={nextSlider} />
            </div>
            <div className='arrow'
                style={{
                    position: 'absolute',
                    top: '50%', left: '1.5rem',
                    fontSize: '1.5rem', lineHeight: '1.5rem',
                    borderRadius: '100%', padding: '.5rem',
                    backgroundColor: 'rgba(194, 65, 12, 1)',
                    color: 'white', cursor: 'pointer'
                }} >
                <BsChevronCompactLeft onClick={prevSlider} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '.5rem' }}>
                {
                    sliders.map((sliderItem, sliderIndex) => (
                        <div onClick={() => moveToSlide(sliderIndex)}
                            key={sliderIndex}
                            style={{ fontSize: '1.5rem', cursor: 'pointer' }}>
                            <RxDotFilled />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Featured
