import React from 'react'
import Nav from '../Nav'

import logo from '../../media/logo.png'
import search from '../../media/search.png'
import {Routes, Route, Link} from 'react-router-dom'
import IndexPage from '../../Pages/IndexPage'
import s from './index.module.css'

export default function Header({activeMenu, setMenuActive}) {
  
  return (
    <div className = {s.container}>
        <div className = {['container', s.flex_container].join(' ')}>
            <div className = {s.header_left}>
            <Link to = {'/'}>
                <img src={logo} alt="logo" />
            </Link>
                <img src={search} alt="search" />
            </div>

           
            <Nav activeMenu = {activeMenu} setMenuActive = {setMenuActive}/>
               


        </div>

    </div>
  )
}
