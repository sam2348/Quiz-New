import React from 'react'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <form className="container-fluid justify-content-start">
                   <NavLink className="btn btn-outline-success me-2" to="/addquestion" type="button">Add Question's</NavLink>
                </form>
            </nav>
        </div>
  )
}

export default Navbar;