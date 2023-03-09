import React from 'react'
import Directory from './components/directory/directory.component'

const App = () => {


  const categories = [
    {
      "id": 1,
      "title": "Hats",
      "imageUrl": "./images/hats.png",
    },
    {
      "id": 2,
      "title": "Jackets",
      "imageUrl": "./images/jackets.png",
      "price": 18
    },
    {
      "id": 3,
      "title": "Sneakers",
      "imageUrl": "./images/sneakers.png",

    },
    {
      "id": 4,
      "title": "Womens",
      "imageUrl": "./images/womens.png",
    },
    {
      "id": 5,
      "title": "Mens",
      "imageUrl": "./images/mens.png",
      "price": 18
    },

  ]

  return (

 <>
 <Directory categories={categories}/>
 </>

  
  )
}

export default App