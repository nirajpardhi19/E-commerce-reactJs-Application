import React from 'react'
import { myDatabse } from '../firebase.js'
import jquery from "jquery"

export default function Card() {
const [productsData, setProductData] = React.useState([])
   
    React.useEffect(function()
    {
        myDatabse.collection("products").onSnapshot(function(snapshot)
        {
         setProductData (snapshot.docs.map(function(i)
             {
               return i.data()
             }))
        })
    })

function collectData(event)
{
//Logic to collect the data like quantity amd the id
 
if (localStorage.getItem("cart") == null)
{
   var cart = {}
}
else
{
 
  cart = JSON.parse(localStorage.getItem("cart"))
}

//We need to get the ID
let myId = event.target.id 
 
if(cart[myId] == undefined)
{
  
  var name = document.getElementById("myname"+myId).innerText
  var price = Number(document.getElementById("myprice"+myId).innerText)
  var quantity = 1
  cart[myId] = [quantity, name, price]
}
else
{
   quantity = cart[myId][0] + 1
   cart[myId][0] = quantity
   price = Number(document.getElementById("myprice"+myId).innerText) * quantity
   cart[myId][2] = price
}

localStorage.setItem("cart", JSON.stringify(cart))


displayCart(cart)
function displayCart(mycart)
{
 //Logic dispaly the data taht is present the cart variable and put it inside popover
 var cartData = ""
 for (let i in mycart)
 {
  cartData = cartData + "QTY:" + mycart[i][0] +" " + "NAME:" + mycart[i][1] +" " + "PRICE:" + mycart[i][2] +" " + "<br/>"
  //console.log(cartData)
 }

cartData = cartData + "<a href='productData.html' class='btn btn-success'>Continue</a>"


//console.log(document.getElementById("mypopover"))
document.getElementById("mypopover").setAttribute("data-content", cartData)


}

}


  return (
    <div className="all" style={{display:"flex"}}>
     {
      productsData.map(function(i)
      {
        return  <div key={i.slno} className="card" style={{width: 350, margin:30, padding:30}}>
          <h2>{i.slno}</h2>
        <img src={i.imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title" id={"myname"+i.slno}>{i.name}</h5>
          <p className="card-text">{i.description}</p>
         <del><h5  className="card-text" >{i.originalPrice}</h5></del>
          <h5  className="card-text" id={"myprice"+i.slno}>{i.discountedPrice}</h5>
          <a href="#" className="btn btn-primary" onClick={collectData} id={i.slno}>Add To Cart</a>
        </div>
      </div>
      })
     }
    </div>
  )
}
