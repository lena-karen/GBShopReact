import React from 'react'
import Featured from '../../components/Featured'
import Services from '../../components/Services'
import s from './index.module.css'
export default function CatalogPage() {
  return (
    <div>
        <div className = {s.catalog_header}>
            <div className = {['container', s.catalog_flex].join(' ')}>
                <h2>MEN</h2>
                <a href="#">HOME</a>
            </div>  


        </div>
        <div className = {[s.filter_sort_block, 'container'].join(' ')}>
            <select>
                <option>FILTER</option>
            </select>
            <div className = {s.sort_block}>
                <select>
                    <option>TRENDING NOW</option>
                </select>
                <select>
                    <option>SIZE</option>
                </select>
                <select>
                    <option>PRICE</option>
                </select>
            </div>
        </div>
        <Featured />
        <Services />
    </div>
  )
}
