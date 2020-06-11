import React from 'react'
import styled from 'styled-components'
import { Divider } from './Header'

const FilterSection = styled.div`
  display: flex;
  padding: 50px 45px;
  justify-content: center;
  font-family: 'Pathway Gothic One', sans-serif;  
  font-size: 20px
`
const Title = styled.h2`
  padding-right: 50px;
  font-weight: 700;
`
const FilterList = styled.ul`
  display: flex;
  align-items: center;
`
const Topics = styled.li`
  padding-right: 50px;
`


export default function FilterBar({ topics }) {

  const topicNames = topics.map((topic,id) => {
    return (
      <React.Fragment key={id}>
        <Topics>{topic.name}</Topics>
      </React.Fragment>
    )
  })
  return (
    <>
      <FilterSection>
        <Title>I'm Looking For:</Title>
        <nav>
          <FilterList>
            {topicNames}
          </FilterList>
        </nav>
      </FilterSection>
      <Divider/>
    </>
  )
}
