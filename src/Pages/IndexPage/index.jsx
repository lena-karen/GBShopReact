import React from 'react'
import Introduction from '../../components/Introduction'
import Categories from '../../components/Categories'
import Featured from '../../components/Featured'
import Services from '../../components/Services'
export default function IndexPage() {
  return (
    <div>
        <Introduction />
        <Categories />
        <Featured />
        <Services />
    </div>
  )
}
