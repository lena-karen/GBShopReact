import React from 'react'
import s from './index.module.css'
import { FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons'
export default function Footer() {
  return (
    <footer className = {s.container}>
        <div className = {['container', s.footer_flex].join(' ')}>
        <div className = {s.footer_copyright}>
                <p>© 2021  Brand  All Rights Reserved.</p>
            </div>
            <div className = {s.footer_socials}>
                <a href="#">
                    <FacebookOutlined className = {s.socials}/>
                </a>
                <a href="#">
                    <InstagramOutlined className = {s.socials}/>
                </a>
                <a href="#">
                    <TwitterOutlined className = {s.socials}/>
                </a>
            </div>
        </div>
    </footer>
  )
}
