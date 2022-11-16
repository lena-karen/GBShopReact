import React, {useState} from 'react'
import s from './index.module.css'
import add_to_cart from '../../media/add-to-cart.png'

export default function FeaturedItem({name, desc, price, img}) {
  const [isVisible, showBlock] = useState('none');
  const mouseOver = () => showBlock('block');
  const mouseLeave = () => showBlock('none');
  const addBlockStyle = {
      display: isVisible
    }
  
  return (
    <div onMouseOver = {mouseOver} onMouseLeave = {mouseLeave} className = {s.product_item} >
      <div className = {s.product_img}>
        <img className = {s.cart_img} src = {img} alt = 'cart'></img>
        <div className = {s.add_to_cart_block} style = {addBlockStyle}>
          <a className = {s.add_to_cart_link} href="#">
            <img src={add_to_cart} alt="cart" />
            <p className = {s.add_text}>Add to Cart</p>
          </a>
        </div>
      </div>
      <div className = {s.card_text}>
        <p className = {s.product_name}>{name}</p>
        <p className = {s.product_desc}>{desc}</p>
        <p className = {s.product_price}>${price}.00</p>
      </div>
      
    </div>
  )
}
