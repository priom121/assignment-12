
import { useEffect, useState } from "react";
import useBioData from "../../../Hooks/useBioData";
import BioDetails from "./BioDetails";



const BioData = () => {
    // const [gender,setGender] =useState([])
    const [search,setSearch] =useState('')
    const [bio,setBio] =useState([])
    const [items] = useBioData([])
    useEffect(()=>{
        fetch('http://localhost:5000/biodata')
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
        })
    },[])

    useEffect(()=>{
        if(search){
            fetch(`http://localhost:5000/bio?search=${search}`)
        .then(res=>res.json())
        .then(data=>setBio(data))
        }
    },[search])


 const handleSearch =(e)=>{
    e.preventDefault();
    const search =e.target.search.value;
    console.log('search result', search);
    setSearch(search)
 }
return (
 <div className="max-w-screen-2xl mt-5 mx-auto">
<form onSubmit={handleSearch}>   
    <label form="default-search"className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="text" name="search" id="default-search"className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required/>
        <button  type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>
<div className="grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4 gap-5">
    {
     items.map(item=><BioDetails key={item._id} item={item}></BioDetails>)   
    }
</div>
                                                                             
  </div>
);
};

export default BioData;