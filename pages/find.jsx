import React, { useState } from 'react'
import { SearchBar } from '../components/SearchBar'
import Food from '../components/Food'
import { fetchRecipe } from '../libs/fetchApi'
import { SimpleGrid } from '@mantine/core'
import Link from 'next/link'

export default function Find() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    console.log("search: ", search)

    const req = await fetchRecipe(search)
    console.log(req)
    setLoading(false)
    return setRecipes(req.hits);
  }

  console.log(recipes);
  const handleClick = (e) => {
    e.preventDefault();
    fetchData();
    setLoading(true)
  }

  const foods = recipes
    ? recipes.map((recipe, index) => {
      return (
        <Link key={index} href={`/food/${recipe.label}`}>
          <Food key={index} recipe={recipe.recipe} />
        </Link>
      )
    })
    : null

  return (
    <div>

      <div className="max-w-full">
        {/* <button onClick={handleClick}> click </button> */}
        <SearchBar setSearch={setSearch} handleClick={handleClick} />
        {/* <div className="my-10 mx-auto"> */}
        {/* {foods? foods : <h1>No data available! please input</h1>} */}
        {loading ?
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <h1 className='text-center text-6xl'>Loading...</h1>
          </div>
          :
          <div className="flex justify-center w-full">
            <SimpleGrid cols={6}
              align="center"
              breakpoints={[
                { maxWidth: 1340, cols: 4 },
                { maxWidth: 940, cols: 3 },
                { maxWidth: 700, cols: 2 },
                { maxWidth: 460, cols: 1 },
              ]}
            >
              {foods}
            </SimpleGrid>
          </div>
        }

      </div>
    </div>
  )
}

