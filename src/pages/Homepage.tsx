import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Card from '../components/Card';
import Modal from '../components/Modal';
import Loading from '../components/Loading';
import { fetchDragons, fetchRockets } from '../actions'
import { TPayload } from '../actions/actionTypes'
import { Rootstore }  from '../index'

const Homepage: React.FC = () => {
  const [spaceCrafts, setSpaceCrafts] = useState<TPayload>([])
  const { dragons, rockets } = useSelector((state: Rootstore) => state)
  const dispatch = useDispatch()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const { name } = e.target as HTMLButtonElement;
    if (name === "dragons") 
      setSpaceCrafts([...dragons])
    if (name === "rockets") 
      setSpaceCrafts([...rockets])
  }


  useEffect(() => {
    dispatch(fetchRockets())
    dispatch(fetchDragons())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setSpaceCrafts([...dragons, ...rockets])
  }, [dragons, rockets])
  
  return (
    <section className="w-screen flex flex-col items-center text-white">
      <div>
        <button 
          className="mr-2 bg-pink-700 py-2 px-4 rounded-lg dosis-bold"
          onClick={handleClick}
          name="rockets"
        >
          Rockets
        </button>
        <button 
          className="ml-3 bg-pink-700 py-2 px-4 rounded-lg dosis-bold"
          onClick={handleClick}
          name="dragons"
        >
          Dragon
        </button>
      </div>
      {
        spaceCrafts ? spaceCrafts.map(spaceCraft => (
          <Card
            key={spaceCraft.id}
            id={spaceCraft.id}
            name={spaceCraft.name}
            rocket_name={spaceCraft.rocket_name}
            description={spaceCraft.description}
            flickr_images={spaceCraft.flickr_images}
          />
        )) :
        <Loading />  
      }

      <Modal 
      />
    </section>
  )
}

export default Homepage
