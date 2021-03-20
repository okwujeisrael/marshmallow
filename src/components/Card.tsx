import React from 'react';
import { useDispatch } from 'react-redux';

import { TPayloadProps } from '../actions/actionTypes';
import { fetchModalDescription, fetchModalImage } from '../actions';

const Card: React.FC<TPayloadProps> = (props) => {
  const { name, id, flickr_images, description, rocket_name } = props;

  const dispatch = useDispatch()

  const handleClick = (e: React.MouseEvent<HTMLImageElement | HTMLButtonElement>): void => {
    const { tagName } = e.currentTarget
    if (tagName === "BUTTON") 
      dispatch(fetchModalDescription(description))
    if (tagName === "IMG") 
      dispatch(fetchModalImage((e.currentTarget as HTMLImageElement).src))
  }

  return (
    <div 
      className="card bg-gray-300 text-white w-7/12 border border-white rounded-lg p-4 m-4 text-center shadow-lg animate__animated animate__slideInDown"
      id={id}
    >
      <h3 className="text-pink-700 dosis-bold pb-2">
        { 
          (name && name.toUpperCase()) || (rocket_name && rocket_name.toUpperCase()) 
        }
      </h3>
      <small className="text-black">Click image to enlarge</small>

      <div className="flex justify-center flex-wrap">
        {
          flickr_images.map((image, i) => (
            <img 
              src={image} 
              key={`img${i}`} 
              alt={`img${i}`}
              className="w-16 h-16 m-2 border-4 border-white" 
              onClick={handleClick}
            />
            )
          )
        }
      </div>

      <button 
        className="bg-pink-700 p-2 rounded-lg mt-3"
        onClick={handleClick}
      >
        View Description
      </button>
    </div>
  )
}

export default Card;
