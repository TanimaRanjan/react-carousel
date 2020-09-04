import React from 'react'
import { useEmblaCarousel } from 'embla-carousel/react'

const Carousel = ({slides}) => {

    const [viewportRef, embla] = useEmblaCarousel()


    return (
        <div className="embla">
            <div className="embla__viewport" ref={viewportRef}>
                <div className="embla__container">
                    {slides.map((slide, index) => 
                        <div className="embla__slide" >
                            <div className="embla__slide__inner" key={index}>
                                <img
                                    className="embla__slide__img"
                                    src={slide}
                                    alt="A cool view"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Carousel