import React from 'react'
import s from './index.module.css'
import bg_img from '../../media/bg.png'

export default function Introduction() {
  return (
    <section className = {s.container}>
        <div className = {['container', s.intro_flex].join(' ')}>
            <div className = {s.intro_img_block}>
               
            </div>

            <div className = {s.intro_info_block}>
                <div className = {s.intro_info_text_block}>
                    <div className = {s.intro_vertical_line}> 
                    </div>
                    <div>
                        <p className = {s.intro_info_title_first_line}>The brand</p>
                        <p className = {s.intro_info_title_second_line}>of luxerious <span>fashion</span></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
