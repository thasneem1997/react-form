import ListItem from './ListItem';
import { useState } from 'react';//import for useeffect



const Products= ()=>
{
   

  const [title,settitle]=useState("")
  const [price,setprice]=useState("0")
  const [dprice,setdprice]=useState("0")
  const [item,setitem]=useState({
    id:0,
    price:360,
    dprice:250,
    title:"oats"
  })




  const handletitle=(event)=>{
   settitle(event.target.value)
   setitem({...item,title:event.target.value})
  }
  const handleprice=(event)=>{
    setprice(event.target.value)
    setitem({...item,price:event.target.value})
   }
   const handlediscountprice=(event)=>{
    setdprice(event.target.value)
    setitem({...item,dprice:event.target.value})
   }
   const handleupdate=event=>{
    event.preventDefault();
    console.log({title:title,price,dprice})
    if(dprice>price){
        alert("enter discount price smaller");
        return;
     }
    setitem({price,dprice,title})
  
   
   }

  return(
    <div className={"product-wrapper"}>
    <div className={"form"}>
 <form style={{margin:"40px"}}  onSubmit={handleupdate}>
 <h2>Item Card Details</h2>
  <div className={"input-field"}>
  <label style={{margin:"10px"}} htmlFor='title'>Enter the title</label>
  <input type='text' placeholder='enter the title' value={title} onChange={handletitle} required/><br/><br/></div>
  <div className={"input-field"}>
  <label style={{margin:"10px"}} htmlFor='price'>Enter the Price</label>
  <input type='number' placeholder='enter the price' value={price} onChange={handleprice}/><br/><br/></div>
  <div className={"input-field"}>
  <label style={{margin:"10px"}} htmlFor='dprice'>Enter the discounted price</label>
  <input type='number' placeholder='Enter the discounted price' value={dprice} onChange={handlediscountprice}/><br/><br/><br/></div>
  <div className={"submit-wrap"}>
  <button>Update</button>
  </div>
 </form>
 </div>
      

    
 <ListItem data={item}></ListItem>
        
         </div>
         );

}

export default Products;
