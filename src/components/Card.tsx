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
      dispatch(fetchModalImage(e.currentTarget.id))
  }

  return (
    <div 
      className="card bg-gray-300 text-white w-7/12 border border-white rounded-lg p-4 m-4 text-center shadow-lg animate__animated animate__slideInDown"
      id={id}
      data-cy="card"
    >
      <h3 className="text-pink-700 dosis-bold pb-2" data-cy="card-name">
        { 
          (name && name.toUpperCase()) || (rocket_name && rocket_name.toUpperCase()) 
        }
      </h3>
      <small className="text-black">Click image to enlarge</small>

      <div className="flex justify-center flex-wrap" data-cy="image-wrapper">
        {
          flickr_images.map((image, i) => (
            <img 
              src={image}
              id={image}
              key={`img${i}`} 
              alt={`img${i}`}
              className="w-16 h-16 m-2 border-4 border-white" 
              onClick={handleClick}
              data-cy="card-image"
            />
            )
          )
        }
      </div>

      <button 
        className="bg-pink-700 p-2 rounded-lg mt-3"
        onClick={handleClick}
        data-cy="card-button"
      >
        View Description
      </button>
    </div>
  )
}

export default Card;
