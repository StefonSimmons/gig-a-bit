import React from 'react'
import styled from 'styled-components'
import { Divider } from './Header'

const FilterSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 40px 45px;
  justify-content: center;
  font-family: 'Pathway Gothic One', sans-serif;  
  font-size: 20px
`
const Title = styled.h2`
  padding-right: 50px;
  padding-bottom: 10px;
  font-weight: 700;

  @media(max-width: 800px){   
    padding-bottom: 40px;
  }
`
const FilterList = styled.ul`
  display: flex;
  flex-wrap: wrap;  
  align-items: center;
  justify-content: center;
`
const Topics = styled.li`
  padding-right: 50px;
  padding-bottom: 10px;
  cursor: pointer;

  @media(max-width: 800px){   
    padding-bottom: 40px;
  }
`


export default function FilterBar({ topics, filterPosts, getAllPosts}) {

  const topicNames = topics.map((topic,id) => {
    return (
      <React.Fragment key={id}>
        <Topics onClick={() => filterPosts(topic.id, topic.name)}>{topic.name}</Topics>
      </React.Fragment>
    )
  })
  return (
    <>
      <FilterSection>
        <Title>I'm Looking For:</Title>
        <nav>
          <FilterList>
            <Topics onClick={getAllPosts}>All Posts</Topics>
            {topicNames}
          </FilterList>
        </nav>
      </FilterSection>
      <Divider/>
    </>
  )
}
