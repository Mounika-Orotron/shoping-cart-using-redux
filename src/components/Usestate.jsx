import React from "react";
import { useSelector, useDispatch } from "react-redux";
//import { toggleItem } from './store/cartSlice';
import { toggleItem } from "./cartSlice";

const Usestate = () => {
  // event.preventDefault()
  const value = useSelector((state) => state.cart.value);
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  // const toggleCart=(index,e)=>{
  //     if(e)e.preventDefault()
  //       dispatch(toggleItem(index))
  // }

  return (
    <center>
      <h2>Shopping Cart</h2>
      <p>Items in Cart: {value}</p>
      <div>
        {[
          "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
          "https://images.unsplash.com/photo-1531040630173-7cfb894c8eaa?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D",
          "https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",

          "https://media.istockphoto.com/id/1443562748/photo/cute-ginger-cat.jpg?s=612x612&w=0&k=20&c=vvM97wWz-hMj7DLzfpYRmY2VswTqcFEKkC437hxm3Cg=",
          "https://images.pexels.com/photos/1166860/pexels-photo-1166860.jpeg?auto=compress&cs=tinysrgb&h=350",
          "https://images.pexels.com/photos/1161547/pexels-photo-1161547.jpeg?auto=compress&cs=tinysrgb&h=350",
        ].map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Product`} height={150} width={150} />
            {/* <button onClick={()=>toggleCart(index)}></button> */}
            <button onClick={() => dispatch(toggleItem(index))}>
              {cart[index] ? "Remove" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </center>
  );
};

export default Usestate;
