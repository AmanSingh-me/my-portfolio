

import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

export default function NavListItem() {
  return (

    <div className="bg-pink my-3 p-2 flex flex-col rounded-lg" >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/contact">Contact</Link>
    </div>
  )
}
