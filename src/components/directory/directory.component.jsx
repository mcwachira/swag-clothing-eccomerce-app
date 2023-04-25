import React from 'react'
import { CategoryContainer } from './directory.styles'
import DirectoryItem from '../directory-item/directory-item.component'
const Directory = ({categories}) => {


  return (
      <CategoryContainer>
          {categories.map((category) => (


              <DirectoryItem category={category} key={category.id} />



          ))}

      </CategoryContainer>
  )
}

export default Directory