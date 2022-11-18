import React from 'react'
import s from './index.module.css'
import close from '../../media/close.png'
import {MenuOutlined} from '@ant-design/icons'
import account from '../../media/account.png'
import cart from '../../media/cart.png'
import { categories } from '../data/categories'
import {Routes, Route, Link} from 'react-router-dom'
export default function Nav({activeMenu, setMenuActive}) {
console.log(activeMenu)
  return (
    
        <nav className = {s.nav_menu}>
                <MenuOutlined className = {s.menu_icon} onClick = {() => setMenuActive(true)}/>
           
                <a href="#">
                    <img src={account} alt="account" />
                </a>
           
                <Link to = {'/cart_page'}>
                    <img src={cart} alt="cart" />
                </Link>
            

            <div className = {[s.menu, activeMenu ? s.active_menu : ''].join(' ')}>
                <img src = {close} className={s.menu_close} onClick = {() => setMenuActive(false)}></img>
                <ul className = {s.nav_list}>
                    <li>Menu</li>
                    <li>Man
                        <ul className = {s.nav_sublist}>
                            {categories.map(el => <li>{el.name} key = {el.id}</li>)}
                        </ul>
                    </li>

                    <li>Woman
                        <ul className = {s.nav_sublist}>
                            {categories.map(el => <li>{el.name} key = {el.id}</li>)}
                        </ul>
                    </li>
                    <li>Kids
                        <ul className = {s.nav_sublist}>
                            {categories.map(el => <li>{el.name} key = {el.id}</li>)}
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
  )
}
