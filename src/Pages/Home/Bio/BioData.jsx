
import { useEffect, useState } from "react";
import useBioData from "../../../Hooks/useBioData";
import BioDetails from "./BioDetails";
// import { useLoaderData } from "react-router-dom";
// import '../Bio/BioData/BioData.css'

const BioData = () => {
    // const [gender,setGender] =useState([])
    const [search,setSearch] =useState('')
    
    const [items] = useBioData([])
    const [data,setData] =useState(items)
    console.log(items);
    useEffect(()=>{
        setData(items)
    },[items])
    // const [curretPage ,setCurrentPage]= useState(0)
    // const [itemPerPage ,setItemPerPage] = useState(8)

// pagination--->
// const {count} =useLoaderData()
// const numberOfPage =Math.ceil(count / itemPerPage)
// const pages = [...Array(numberOfPage).keys()];
// const pages =[]
// for(let i = 0 ; i<numberOfPage ; i++){
//     pages.push(i)
// }

// const handleChange= (e)=>{
//     const value = parseInt(e.target.value)
//     console.log( value);
//     setItemPerPage(value)
//     setCurrentPage(0)
// }

// const handlePrevious =()=>{
//     if(curretPage > 0){
//         setCurrentPage(curretPage -1)
//     }
// }

// const handleNext=()=>{
//     if(curretPage < pages.length -1){
//         setCurrentPage(curretPage + 1)
//     }
// }
    // useEffect(()=>{
    //     fetch('https://matrimonius-server.vercel.app/biodata')
    //     .then(res=>res.json())
    //     .then(data=>{
    //     //   console.log(data);
    //     setBio(data)
    //     })
    // },[])
    // console.log(bio);

    useEffect(()=>{
        if(search?.length >0){
            fetch(`https://matrimonius-server.vercel.app/bio?search=${search}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setData(data)
        })
        }
    },[search])
    console.log(search);


 const handleSearch =(e)=>{
    e.preventDefault();
    const search =e.target.search.value;
    const division =e.target.division.value;
    // console.log('search result', search);
    setSearch(search)
 }
return (
 <div className="max-w-screen-2xl mt-5 mx-auto flex ">
<div className="flex-1">
<form onSubmit={handleSearch}>   
    <label form="default-search"className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative  md:w-[500px] mt-5 ">
    <span className="label-text text-base">Type</span>
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="text" name="search" id="default-search"className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search in biodata type" />
        <button  type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
    <div className="md:w-[500px] mt-5 ">
     <span className="label-text text-base">Division</span>
     <label className="input-group">
   <div>
   <input type="text"  placeholder="division" 
    name="division" className="input input-bordered w-full"  />
    <button className="btn btn-primary">search</button>
   </div>
  
     </label>
     
     </div>
</form>
</div>
<div className=" flex-1 grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3 gap-5">
    {
     data?.map(item=><BioDetails key={item._id} item={item}></BioDetails>)   
    }
</div>
{/* <div className='pagination'>
                <p>current{curretPage}</p>
                <button onClick={handlePrevious}>previous</button> */}
           {/* { 
           pages.map(page=><button className={curretPage === page ? 'selected': undefined} onClick={()=>setCurrentPage(page)} 
           key={page}>{page}</button>)
           } */}
           
           {/* {
            pages.map(page=><button className="text-red-500" key={page}>{page}</button>)
           } */}
           {/* <button onClick={handleNext}>Next</button>
        <select value={itemPerPage} onChange={handleChange} name="" id="">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
        </select> */}
            {/* </div>                                                                        */}
  </div>
);
};

export default BioData;