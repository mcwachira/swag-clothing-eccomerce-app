import React from 'react'
import Directory from '../../components/directory/directory.component'


const Home = () => {


  const categories = [
    {
      "id": 1,
      "title": "Hats",
      "imageUrl": "./images/hats.png",
      route:'shop/hats',
    },
    {
      "id": 2,
      "title": "Jackets",
      "imageUrl": "./images/jackets.png",
      route:'shop/jackets',
    },
    {
      "id": 3,
      "title": "Sneakers",
      "imageUrl": "./images/sneakers.png",
      route:'shop/sneakers',
    },
    {
      "id": 4,
      "title": "Womens",
      "imageUrl": "./images/womens.png",
      route:'shop/womens',
    },
    {
      "id": 5,
      "title": "Mens",
      "imageUrl": "./images/mens.png",
      route:'shop/mens',
    },

  ]

  return (

 <>
 <Directory categories={categories}/>
 </>

  
  )
}

export default Home