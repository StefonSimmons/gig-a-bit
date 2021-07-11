import React from 'react'

export default function DropDown({ topic }) {
  return (
    <option value={topic.id}>{topic.name}</option>
  )
}
