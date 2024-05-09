/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { useState, useEffect, useRef } from 'react'
import CSSTransition from 'react-transition-group/CSSTransition'

type ImageSliderProps = {
    images: {
      url: string
      title: string
      description: string
    }[]
}

function ImageSlider({ images }: ImageSliderProps): JSX.Element {
    const [imageIndex, setImageIndex] = useState(0)
    const [inProp, setInProp] = useState(false)

    let slideInterval = -1
    const intervalTime = 3000
    const nodeRef = useRef(null)

    function showNextImage() {
        setImageIndex(index => index === images.length - 1 ? 0 : index + 1)
        setInProp(false)
    }
    
    function showPrevImage() {
        setImageIndex(index => index === 0 ? images.length - 1 : index - 1)
        setInProp(false)
    }

    function auto() {
        slideInterval = setInterval(showNextImage, intervalTime);
    }

    useEffect(() => {
        auto()
        setInProp(true)
        return () => clearInterval(slideInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [imageIndex]);

    return (
        <section className='w-full h-full relative'>
            <div className='w-full h-full flex overflow-hidden'>
                <div className='h-[512px] content overflow-hidden'>
                    <CSSTransition nodeRef={nodeRef} in={inProp} timeout={500} classNames="desc">
                        <div ref={nodeRef} className='justify-center mt-24 ml-4 max-w-lg max-h-64 overflow-hidden'>
                            <h2 className='text-5xl font-bold font-mono max-w-fit'>
                                {images[imageIndex].title}
                            </h2>
                            <p className='mt-4 font-mono max-w-fit'>
                                {images[imageIndex].description}
                            </p>
                        </div>
                    </CSSTransition>
                </div>
                {
                    images.map(({ url, title }, index) => (
                        <div className='flex w-full flex-shrink-0 flex-grow-0 h-[512px]'>
                            <img key={title} src={url} 
                            className='object-cover w-full h-full min-h-[728px]'
                            aria-hidde={imageIndex !== index}
                            style={{translate: `${-100 * imageIndex}%`, transition: "translate 500ms ease-in-out", zIndex: "0"}}
                            />
                        </div>
                    ))
                }
                <button onClick={showPrevImage} className='img-slider-btn' style={{left: "0", backgroundColor: "rgba(0, 0, 0, 1)"}}><ChevronLeftIcon/></button>
                <button onClick={showNextImage} className='img-slider-btn' style={{right: "0", backgroundColor: "rgba(0, 0, 0, 0)", position: "absolute", zIndex: "1"}}><ChevronRightIcon/></button>
            </div>
        </section>
    )
}

export default ImageSlider