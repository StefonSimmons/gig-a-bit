import React from 'react'
import styled from 'styled-components'
import { Divider } from './Header'

const FilterSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 25px 45px;
  justify-content: center;
  font-family: 'Pathway Gothic One', sans-serif;  
  font-size: 20px;
  background: white;
`
const FilterFor = styled.h2`
  margin: 10px 25px;
  font-weight: 700;
  align-self: center;
  text-align: center;

  @media(max-width: 800px){  
    padding: 0 50px 40px 50px; 
  }
`
const FilterList = styled.ul`
  display: flex;
  flex-wrap: wrap;  
  align-items: center;
  justify-content: center;
`
const Topic = styled.li`
  margin: 10px 20px;
  padding: 8px 10px;
  text-align: center;
  background: rgb(234, 190, 191);
  border-radius: 9px;
  letter-spacing: 2px;
  cursor: pointer;

  &:hover {
    background: rgb(204, 160, 161);
  }
`

export default function FilterBar({ topics, filterPosts, reloadAllPosts }) {

  const topicNames = topics.map((topic, id) => {
    return (
      <React.Fragment key={id}>
        <Topic onClick={() => filterPosts(topic.id, topic.name)}>{topic.name}</Topic>
      </React.Fragment>
    )
  })
  return (
    <>
      <FilterSection>
        <FilterFor>I'm Looking For:</FilterFor>
        <nav>
          <FilterList>
            <Topic onClick={reloadAllPosts}>All Posts</Topic>
            {topicNames}
          </FilterList>
        </nav>
      </FilterSection>
      <Divider />
    </>
  )
}
