import React from 'react'
import { SearchBar } from '../components/SearchBar'
import { Food } from '../components/Food'

export default function find() {
  return (
    <div>
        <div className="max-w-full">
          <SearchBar />
          <div className="my-10 mx-auto">
            <div className="flex justify-between">
              <Food />
              <Food />
              <Food />
              <Food />
            </div>
            <div className="flex justify-between">
              <Food />
              <Food />
              <Food />
              <Food />
            </div>
            <div className="flex justify-between">
              <Food />
              <Food />
              <Food />
              <Food />
            </div>
          </div>
        </div>
    </div>
  )
}
