import React from 'react'
import s from './index.module.css'

import reg_face from '../../media/registration-face.png'
export default function Registration() {
  return (
    <section className = {s.container}>
        <div className = {['container', s.registration_flex].join(' ')}>
            <div className = {s.registration_info}>
                <img src={reg_face} alt="photo" className = {s.registration_info_img} />
                <p className = {s.registration_info_text}>“Vestibulum quis porttitor dui! Quisque viverra nunc mi,<span> a pulvinar purus condimentum“</span></p>
            </div>
            <form action="#" className = {s.registration_form}>
                <p className = {s.registration_form_text}>SUBSCRIBE</p>
                <span>FOR OUR NEWLETTER AND PROMOTION</span>
                <form className = {s.registration_input_block}>
                    <input type="email" className = {s.registration_input} placeholder="Enter Your Email" />
                    <button className = {s.registration_form_btn}>Subscribe</button>
                </form>
                
            </form>
        </div>
    </section>
  )
}
