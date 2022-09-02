import React from 'react'
import "./topbar.css"
export default function Topbar() {
  return (
    <div className='topbar-rw'>
        
        <h2 className="topbar-col topbar-col1">Estatery</h2>
        <div className="topbar-col topbar-col2">Rent</div>
        <div className="topbar-col">Buy</div>
        <div className="topbar-col">Sell</div>
        <div className="topbar-col">
            <label htmlFor="">Manage Property</label>
            <select>
                <option></option>
                <option></option>
                <option></option>
            </select>
        </div>
        <div className="topbar-col">
        <label htmlFor="">Resources</label>
            <select>
                <option></option>
                <option></option>
                <option></option>
            </select>
        </div>
        <div className="topbar-col topbar-col7">
            <div className="topbar-col7-col">Login</div>
            <div className="topbar-col7-col">Sign up</div>
        </div>
     </div>
  )
}
