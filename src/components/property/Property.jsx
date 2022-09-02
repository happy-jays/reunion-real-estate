import React from 'react'
import "./property.css"
import Info from "../data.json"
import { useState } from 'react'

// const DataStore = Info

export default function Property({DataStore}) {

  return (
    <div className='property-rw'>
        {DataStore.map(data =>(
          <div key={data.id} className="property-col">
            <img className='property-col1-rw1' src={data.imageurl} alt="Some house" />
            <div className="property-col1-rw2">
            <div className="property-col1-rw2-rw1">
                <p>{data.rent}/month</p>
            </div>
            <h2>{data.name}</h2>
            <p>{data.address}</p>
            <div className="property-col1-rw2-rw5">
                  <div className="property-col1-rw2-rw5-col">{data.beds} Beds</div>
                  <div className="property-col1-rw2-rw5-col">{data.bath} Bathrooms</div>
                  <div className="property-col1-rw2-rw5-col">{data.area} sq meter</div>
            </div>
            </div>
        </div>
        ))}
        
        {/* <div className="property-col"></div>
        <div className="property-col"></div> */}
    </div>
  )
}
