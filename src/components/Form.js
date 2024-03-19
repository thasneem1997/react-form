const Form=(props)=>{
    const handleInput = e => {
        props.onChangeInput(e)
    }
return(
<div className={"form"}>
 <form style={{margin:"40px"}}  onSubmit={props.onFormSubmission}>
 <h2>Item Card Details</h2>
  <div className={"input-field"}>
  <label style={{margin:"10px"}} htmlFor='title'>Enter the title</label>
  <input type='text' placeholder='enter the title' value={props.item.title} onChange={handleInput}  name="title" required/><br/><br/></div>
  <div className={"input-field"}>
  <label style={{margin:"10px"}} htmlFor='price'>Enter the Price</label>
  <input type='number' placeholder='enter the price' value={props.item.price} onChange={handleInput} name="price"/><br/><br/></div>
  <div className={"input-field"}>
  <label style={{margin:"10px"}} htmlFor='dprice'>Enter the discounted price</label>
  <input type='number' placeholder='Enter the discounted price' name="dprice" value={props.item.dprice} onChange={handleInput}/><br/><br/><br/></div>
  <div className={"submit-wrap"}>
  <button>Update</button>
  </div>
 </form>
 </div>
 );
}
export default Form;
 