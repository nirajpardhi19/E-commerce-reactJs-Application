import React from 'react'
import { myDatabse } from '../firebase.js'

export default function AddProducts() {

 const[productData, setProductData] = React.useState({
    productSlno: "" ,
    productName: "",
    productImageUrl: "",
    productDescription: "",
    productOriginalPrice: "",
    productDiscountedPrice: ""

 })

 function collectIt(event)
 {
    const myData = event.target.value

    setProductData({...productData, [event.target.name]: myData})

 }

 function saveData()
 {
    myDatabse.collection("products").add({
        slno: productData.productSlno,
        imageUrl: productData.productImageUrl,
        name: productData.productName,
        description: productData.productDescription,
        originalPrice: productData.productOriginalPrice,
        discountedPrice: productData.productDiscountedPrice
    })
    window.location.pathname= "/home"
 }

  return (
    <div className="row">
     <div className="col-md-6" style={ {margin:40} }>
      <label>Product Slno:</label>
      <input type="number" name="productSlno" className="form-control" onChange={collectIt}/><br/><br/>

      <label>Product Name:</label>
      <input type="text" name="productName" className="form-control" onChange={collectIt}/><br/><br/>

      <label>Product Image URL:</label>
      <input type="text" name="productImageUrl" className="form-control" onChange={collectIt}/><br/><br/>
    
      <label>Product Description:</label>
      <textarea rows="4" cols="40" name="productDescription" className="form-control" onChange={collectIt}></textarea><br/><br/>
      
      <label>Product Original Price:</label>
      <input type="number" name="productOriginalPrice" className="form-control" onChange={collectIt}/><br/><br/>

      <label>Product Discounte Price Price:</label>
      <input type="number" name="productDiscountedPrice" className="form-control" onChange={collectIt}/><br/><br/>

      <button className="btn btn-outline-success" onClick={saveData}>Add Product</button>

     </div>
    </div>
  )
}
