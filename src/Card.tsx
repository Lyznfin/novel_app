import { StarIcon } from '@heroicons/react/24/outline'
import CSSTransition from 'react-transition-group/CSSTransition'
import { useState } from 'react';

interface PropsType {
    key: number;
    name: string;
    image: string;
    status: string;
    rating: number;
}

export function Card(props: PropsType) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    <div className='flex justify-evenly p-2 m-2 card'>
    <CSSTransition in={isHovered} timeout={200} classNames="zoom">
    <div key={props.image} className='relative flex-auto' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <img src={props.image}/>
    </div>
    </CSSTransition>
    <div className='m-2'>
        <h3 className='text-lg h-24'>{props.name}</h3>
        <div>
            <div className=' float-right'>{props.status}</div>
            <div className=' float-left flex items-center text-center'>
                <h3 className='mr-1'>{props.rating}</h3>
                <StarIcon className='w-4 h-4 self-center' fill='#FFFFFF' />
            </div>
        </div>
        </div>
    </div>
  
    return (
        <div className='flex justify-evenly p-2 m-2 card' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div key={props.key} className='relative flex-auto' style={{transition: "0.2s"}}>
                <div className='overflow-hidden'>
                    <CSSTransition in={isHovered} timeout={5000} classNames="zoom">
                        <img src={props.image}/>
                    </CSSTransition>
                </div>
                <div className='m-2'>
                    <h3 className='text-lg h-24'>{props.name}</h3>
                    <div>
                        <div className=' float-right'>{props.status}</div>
                        <div className=' float-left flex items-center text-center'>
                            <h3 className='mr-1'>{props.rating}</h3> 
                            <StarIcon className='w-4 h-4 self-center' fill='#FFFFFF' key={props.key} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Card