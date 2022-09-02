import React, {useState} from 'react';
import Filter from './components/fiterbox/Filter';
import Heading from './components/heading/Heading';
import Property from './components/property/Property';
import Topbar from "./components/topbar/Topbar";
import Info from "./components/data.json";

const DataStore = Info
const alllocation = [...new Set(DataStore.map((curElem)=>{
  return curElem.address;
}))];
const allmoveindate = [...new Set( DataStore.map((curElem)=>{
  return curElem.moveindate;
}))];
const allprice = [...new Set( DataStore.map((curElem)=>{
  return curElem.rent;
}))];
const allpropertytype = [...new Set( DataStore.map((curElem)=>{
  return curElem.propertytype;
}))];

export default function Page() {
  const [location,setLocation] = useState(alllocation);
  const [moveindate,setMoveindate] = useState(allmoveindate);
  const [price,setPrice] = useState(allprice);
  const [propertytype,setPropertytype] = useState(allpropertytype);
  
  const [data, setData] = useState(Info);

  return (
    <div>
        <Topbar/>
        <Heading/>
        <Filter location={location} moveindate={moveindate} price={price} propertytype={propertytype}/>
        {/* <Property /> */}
    </div>
  )
}
