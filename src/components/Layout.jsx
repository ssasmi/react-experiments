import { Outlet } from 'react-router-dom';
//import { CustomLink } from './CustomLink'

const Layout = () => {
    return (
        <>
        <body>
    
        <header>
            {/* <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/posts">Blog</CustomLink>
            <CustomLink to="/about">About</CustomLink> */}
        </header>

        <main className="container">
            <Outlet />
        </main>

        <footer>&copy; React 2021</footer>
        </body>
        </>
    )
}

export {Layout}
