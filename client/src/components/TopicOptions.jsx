import React from 'react'

export default function DropDown({ topic, key }) {
  return (
    <React.Fragment key={key}>
      <option value={topic.id}>{topic.name}</option>
    </React.Fragment>
  )
}
