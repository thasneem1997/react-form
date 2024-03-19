import { useState } from "react";
const ListItem =({data})=>
{
    const [cart,setcart]=useState("no items added to cart")
 return (
<div  style={{width:"100px",padding:"130px"}}>
    <img src="/assets/gallery.png" alt="img not found"style={{width:"300px"}}/>

   
    <div className="pricing">
    <span>{data.dprice}</span>
    <small><s>{data.price}</s></small>
    <p style={{ margin: '10px',
        fontSize: '18px'}}>{data.title}</p>
   
   </div>
   <div>
    <button className="cart-btn" onClick={()=>setcart("item added to cart")}>Add to cart
</button>
   </div>

</div>

 );
}

export default ListItem