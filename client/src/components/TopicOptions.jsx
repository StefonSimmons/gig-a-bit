import React from 'react'

export default function DropDown({ topic, id }) {
  return (
    <React.Fragment key={id}>
      <option value={topic.id}>{topic.name}</option>
    </React.Fragment>
  )
}
