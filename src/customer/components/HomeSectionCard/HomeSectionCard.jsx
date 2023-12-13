import React from 'react'

const HomeSectionCard = ({image, name, price}) => {
  return (
    <>
    <div className=' w-[15rem] flex flex-col shadow-lg rounded-lg'>
            <div className="h-[14rem] p-3">
                <img src={image} alt="" className=' rounded-lg object-cover w-full h-full object-top' />
            </div>
            <div className=" p-4">
                <h1 className=' text-lg font-medium text-gray-900 capitalize'>{name}</h1>
                <p>{`$${price}`}</p>
            </div>
        </div>
    </>
  )
}

export default HomeSectionCard