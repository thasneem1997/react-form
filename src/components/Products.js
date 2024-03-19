import ListItem from './ListItem';
import { useState } from 'react';//import for useeffect
import Form from './Form';




const Products= ()=>
{
     const [item,setitem]=useState({
    id:0,
    price:360,
    dprice:250,
    title:"oats"
  })





  const handleInput = event => {//main function which used in all inputs in form,if the user type something in input box this function trigger
    
    setitem({
        ...item,
        [event.target.name]: event.target.value//instailize or set value that user type to the set item
    })
}
const submitForm = event => {//this function trigger when the form submit
  event.preventDefault();//this function stops the reloading of the page
  if(item.discountedPrice > item.price) {
      alert("Discounted Price cannot be greater than price")//if discount price greater than price then this alert displays
      return;
  }
  console.log("Item Updated!", item)//if  everything is good it will print this message and show the item
}

  return(
    <div className={"product-wrapper"}>
    <Form item={item} onChangeInput={handleInput} onFormSubmission={submitForm}/>
      

    
 <ListItem data={item}></ListItem>
        
         </div>
         );

}

export default Products;
