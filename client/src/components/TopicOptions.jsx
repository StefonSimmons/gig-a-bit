import React from 'react'

export default function DropDown({ topic }) {
  return (
    <React.Fragment key={topic.id}>
      <option value={topic.id} >{topic.name}</option>
    </React.Fragment>
  )
}
