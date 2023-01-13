import React from 'react'
import { TableType } from '../../types/type'
import './DataList.css'


type Props = {
  CurrentPosts: TableType[]
}

const DataList = (props:Props) => {
    const { CurrentPosts } = props
  return (
    <div className='DataList'>
        <div className='Head'>
        <h2>Id</h2>
        <h2>Name</h2>
        <h2>Year</h2>
      </div>
      {CurrentPosts.map((table) => {
        return (
          <div key={table.id} style={{ backgroundColor: `${table.color}` }} className='Table'>
            <h3>{table.id}</h3>
            <h3>{table.name}</h3>
            <h3>{table.year}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default DataList