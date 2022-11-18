import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import s from './index.module.css'

export default function Categories() {
  return (
    <section className = {['container', s.container].join(' ')}>
        <Link to = "/catalog_page" className = {s.categories_for_women}>
            <div className = {s.categories_text}>
                <p className = {s.categories_info}>30% OFF</p>
                <p className = {s.categories_title}>FOR WOMEN</p>
            </div>
        </Link>
        <Link to = "/catalog_page" className = {s.categories_for_men}>
            <div className = {s.categories_text}>
                <p className = {s.categories_info}>Hot deal</p>
                <p className = {s.categories_title}>FOR MEN</p>
            </div>
        </Link>
        <Link to = "/catalog_page" className = {s.categories_for_kids}>
            <div className = {s.categories_text}>
                <p className = {s.categories_info}>New arrivals</p>
                <p className = {s.categories_title}>FOR KIDS</p>
            </div>
        </Link>
        <Link to = "/catalog_page" className = {s.categories_accesories}>
            <div className = {s.categories_text}>
                <p className = {s.categories_info}>LUXIROUS & TRENDY</p>
                <p className = {s.categories_title}>ACCESORIES</p>
            </div>
        </Link>
    </section>
  )
}
