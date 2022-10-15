import React, {useState} from 'react'
import { SearchBar } from '../components/SearchBar'
import Food  from '../components/Food'
import {fetchAPI} from '../libs/fetchApi'
import {SimpleGrid} from '@mantine/core'
import Link from 'next/link'

export default function Find() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("")

  const fetchData = async () => {
    console.log("search: ", search)

    const params = {
      q : search,
      type : "public",
      diet : "balanced"
    }

    const req = await fetchAPI("/recipes/v2", params)
    console.log(req)
    return setRecipes(req.hits);
  }

  console.log(recipes);
  const handleClick = (e) => {
    e.preventDefault();
    fetchData();
    // console.log("CLICKED")
  }

  const foods = recipes
  ? recipes.map((recipe, index) => {
    return (
      <Link key={index} href={`/food/${recipe.label}`}>
        <Food key={index} recipe={recipe.recipe}/>
      </Link>
    )
  })
  : null

  return (
    <div>
      <div className="max-w-full">
        <button onClick={handleClick}> click </button>
        <SearchBar setSearch={setSearch} handleClick={handleClick}/>
        {/* <div className="my-10 mx-auto"> */}
          {/* {foods? foods : <h1>No data available! please input</h1>} */}

          <SimpleGrid cols={4}>
            {foods}
          </SimpleGrid>
      </div>
    </div>
  )
}

