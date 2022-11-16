import React from 'react'
import s from './index.module.css'
import {items} from '../data/featured'
import FeaturedItem from '../FeaturedItem'
export default function Featured() {
  return (
    <section className = {['container', s.container].join(' ')}>
        <div className = {s.featured_info}>
                <p className = 'section_title'>Featured Items</p>
                <p className = {s.featured_text}>Shop for items based on what we featured in this week</p>
        </div>

        <div className = {s.featured_container}>
            {
                items.map(el => <FeaturedItem key={el.id} {...el} />)
            }
        </div>
        <button className = {s.all_products_btn}>Browse All Product</button>
    </section>
  )
}
