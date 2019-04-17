         import React from 'react';
        import { Link, HashRouter } from 'react-router-dom';
        import { Component } from 'react'
        import '../components/header.css'
        
        
        class Header extends Component {
        
            render(){
                return(
                    <HashRouter>
                        <>
                  <div className='headercontainer' >
                  <Link className='nav-brand' to='/movies' >MovieApp</Link>
                    <Link className='nav-link' to='/' >Home</Link>  
                  <Link className='nav-link' to='/movies' >All Movies</Link>
                  <Link className='nav-link' to='/movies/byGenre' >By Genre</Link>
                  <Link className='nav-link' to='/movies/:id'></Link>
                  </div>
                        </>
                    </HashRouter>
                )
            }
        }
        export default Header;

    