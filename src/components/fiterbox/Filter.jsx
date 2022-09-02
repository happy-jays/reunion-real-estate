import React, { useEffect } from 'react'
import { useState } from 'react'
import "./filter.css"
import Info from "../data.json"
import Property from '../property/Property';

export default function Filter({location,moveindate,price,propertytype }) {
  const [loc, setLoc] = useState(null);
  const [mov, setMov] = useState(null);
  const [pri, setPri] = useState(null);
  const [property, setProperty] = useState(null);

  const [data, setData]= useState(Info);

  const onSubmit = () => {

    //if cur.address==null
    // 
    if(loc!==null && mov!== null && pri!==null && property!==null){
      const updated = Info.filter((cur) => {
        return cur.address === loc && cur.moveindate === mov && cur.rent === pri && cur.propertytype === property
      })
      setData(updated);
    }
    else if(loc!==null && mov!== null && pri!==null){
        const updated = Info.filter((cur) => {
          return cur.address === loc && cur.moveindate === mov && cur.rent === pri
        })
        setData(updated);
      }
      else if(loc!==null && mov!== null && property!==null){
        const updated = Info.filter((cur) => {
          return cur.address === loc && cur.moveindate === mov && cur.propertytype === property
        })
        setData(updated);
      }
      else if(loc!==null && pri!==null && property!==null){
        const updated = Info.filter((cur) => {
          return cur.address === loc && cur.rent === pri && cur.propertytype === property
        })
        setData(updated);
      }
      else if(mov!== null && pri!==null && property!==null){
        const updated = Info.filter((cur) => {
          return cur.moveindate === mov && cur.rent === pri && cur.propertytype === property
        })
        setData(updated);
      }
      else if(loc!==null && mov!== null){
        const updated = Info.filter((cur) => {
          return cur.address === loc && cur.moveindate === mov
        })
        setData(updated);
      }
      else if(loc!==null && pri!==null){
        const updated = Info.filter((cur) => {
          return cur.address === loc  && cur.rent === pri
        })
        setData(updated);
      }
      else if(loc!==null && property!==null){
        const updated = Info.filter((cur) => {
          return cur.address === loc && cur.propertytype === property
        })
        setData(updated);
      }
      else if(mov!== null && pri!==null){
        const updated = Info.filter((cur) => {
          return cur.moveindate === mov && cur.rent === pri
        })
        setData(updated);
      }
      else if(mov!== null&& property!==null){
        const updated = Info.filter((cur) => {
          return cur.moveindate === mov && cur.propertytype === property
        })
        setData(updated);
      }
      else if(loc ==null && mov == null && pri!==null && property!==null){
        const updated = Info.filter((cur) => {
          return cur.rent === pri && cur.propertytype === property
        })
      
      setData(updated);
      }
      else if(loc!==null && mov == null && pri==null && property==null){
        const updated = Info.filter((cur) => {
          return cur.address === loc 
        })
        setData(updated);
      }
      else if(mov!== null  && loc == null && pri==null && property==null){
        const updated = Info.filter((cur) => {
          return cur.moveindate === mov 
        })
        setData(updated);
      }
      else if(pri!==null  && mov == null && loc==null && property==null){
        const updated = Info.filter((cur) => {
          return cur.rent === pri
        })
        setData(updated);
      }
      else if(property!==null){
        const updated = Info.filter((cur) => {
          return cur.propertytype === property
        })
        setData(updated);
      }
      else if(pri===null  && mov === null && loc===null && property===null){
        const updated = Info.filter(() => {
          return Info
        })
      }
  }

  return (
    <>
    
    <div className='filter-rw'>
        <div className='filter-col'>
        <label htmlFor="">Location</label>
            <select onChange={(e)=>{
              setLoc(e.target.value);
            }}>
                <option value={null}></option>
                {location.map((curelem)=> {return <option value={curelem} key={curelem}>{curelem}</option> })}
            </select>
        </div>
        <div className='filter-col'>
        <label htmlFor="">Select Move in Date</label>
            <select onChange={(e)=> {
              setMov(e.target.value);
            }}>
                <option value={null}></option>
                {moveindate.map((curelem)=> {return <option value={curelem} key={curelem}>{curelem}</option> })}
            </select>
        </div>
        <div className='filter-col'>
        <label htmlFor="">Price</label>
            <select onChange={(e)=>{
              setPri(e.target.value)
            }}>
                <option value={null}></option>
                {price.map((curelem)=> {return <option value={curelem} key={curelem}>{curelem}</option> })}
            </select>
        </div>
        <div className='filter-col'>
        <label htmlFor="">Property Type</label>
            <select onChange={(e)=>{
              setProperty(e.target.value)
            }}>
                <option value={null}></option>
                {propertytype.map((curelem)=> {return <option value={curelem} key={curelem}>{curelem}</option> })}
            </select>
        </div>
        <button onClick={onSubmit} className='filter-col'>Search</button>
    </div>
    <Property DataStore={data} />
    </>
  )
}
