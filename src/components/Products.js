import ListItem from './ListItem';
import { useState } from 'react';//import for useeffect
import Form from './Form';




const Products= ()=>
{
   

  // const [title,settitle]=useState("")
  // const [price,setprice]=useState("0")
  // const [dprice,setdprice]=useState("0")
  const [item,setitem]=useState({
    id:0,
    price:360,
    dprice:250,
    title:"oats"
  })





  const handleInput = event => {
    // console.log(event.target.value, event.target.name)
    setitem({
        ...item,
        [event.target.name]: event.target.value
    })
}
const submitForm = event => {
  event.preventDefault();
  if(item.discountedPrice > item.price) {
      alert("Discounted Price cannot be greater than price")
      return;
  }
  console.log("Item Updated!", item)
}

  return(
    <div className={"product-wrapper"}>
    <Form item={item} onChangeInput={handleInput} onFormSubmission={submitForm}/>
      

    
 <ListItem data={item}></ListItem>
        
         </div>
         );

}

export default Products;
