import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggle } from '../actions';
import { Rootstore } from '../index';


const Modal = () => {
  const { modal }  = useSelector((state: Rootstore) => state);
  const dispatch = useDispatch();

  const handleClick = (): void => {
    dispatch(toggle());
  }

  const textContent = () => (
    <div className="w-5/12 h-42 bg-white text-black p-4 rounded-lg text-center">
      <div>
        <h3 className="text-pink-700 dosis-bold text-2xl pb-2">DESCRIPTION</h3>
        <p data-cy="modal-description">{modal.description}</p>     
      </div>
    </div>
  )

  const imageContent = () => (
    <img 
      src={modal.image} 
      alt="modal-shot" 
      className="w-1/2 h-1/2 border-4 border-white"
      data-cy="modal-image" 
    />
  )


  return (
    <>
      {
        modal.toggle && (
          <div 
            className="modal fixed top-0 left-0 w-screen h-screen bg-black modal-background flex items-center justify-center cursor-pointer animate__animated animate__flipInX"
            onClick={handleClick}
            data-cy="modal"
          >
            {
              modal.image ? imageContent() : textContent()
            }   
          </div> 
        )
      } 
    </>
  )
}

export default Modal;
