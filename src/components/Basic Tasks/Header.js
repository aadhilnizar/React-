import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div class="navbar navbar-dark bg-dark" expand="lg">
        <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
    </div>
  )
}
