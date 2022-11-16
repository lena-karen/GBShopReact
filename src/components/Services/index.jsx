import React from 'react'
import s from './index.module.css'
import delivery_img from '../../media/delivery.png'
import discounts_img from '../../media/discounts.png'
import assurance_img from '../../media/assurance.png'
export default function Services() {
  return (
    <section className = {s.container}>
        <div className = {['container', s.services_flex].join(' ')}>
            <section className = {s.delivery}>
                <img src = {delivery_img} alt="delivery" className = {s.features_img} />
                <p className = {s.services_title}>Free Delivery</p>
                <p className = {s.services_text}>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
            </section>
            <section className = {s.discounts}>
                <img src = {discounts_img} alt="" className = {s.features_img} />
                <p className = {s.services_title}>Sales & discounts</p>
                <p className = {s.services_text}>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
            </section>
            <section className = {s.assurance}>
                <img src = {assurance_img} alt="" className = {s.features_img} />
                <p className = {s.services_title}>Quality assurance</p>
                <p className = {s.services_text}>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
            </section>
        </div>
    </section>
  )
}
