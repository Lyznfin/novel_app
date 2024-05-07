/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { useState, useEffect } from 'react'

type ImageSliderProps = {
    images: {
      url: string
      title: string
    }[]
  }

function ImageSlider({ images }: ImageSliderProps): JSX.Element {
    const [imageIndex, setImageIndex] = useState(0)

    const autoScroll = true;
    let slideInterval = -1
    const intervalTime = 3000

    function showNextImage() {
        setImageIndex(index => index === images.length - 1 ? 0 : index + 1)
    }
    
    function showPrevImage() {
        setImageIndex(index => index === 0 ? images.length - 1 : index - 1)
    }

    function auto() {
        slideInterval = setInterval(showNextImage, intervalTime);
    }
    
    useEffect(() => {
        setImageIndex(0);
    }, []);
    
    useEffect(() => {
        if (autoScroll) {
            auto();
        }
        return () => clearInterval(slideInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [imageIndex]);

    return (
        <section className='w-full h-full relative'>
            <div className='w-full h-full flex overflow-hidden max-h-[512px]'>
                {
                    images.map(({ url, title }, index) => (
                        <>
                            <img key={title} src={url} 
                            className='h-full w-full object-cover block flex-shrink-0 flex-grow-0'
                            aria-hidden={imageIndex !== index}
                            style={{translate: `${-100 * imageIndex}%`, transition: "translate 500ms ease-in-out"}}
                            />
                        </>
                    ))
                }
                <button onClick={showPrevImage} className='img-slider-btn' style={{left: "0"}}><ChevronLeftIcon/></button>
                <button onClick={showNextImage} className='img-slider-btn' style={{right: "0"}}><ChevronRightIcon/></button>
            </div>
        </section>
    )
}

export default ImageSlider