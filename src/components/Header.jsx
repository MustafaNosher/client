import { Navbar, NavbarToggle } from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { TextInput } from 'flowbite-react'
import { Button } from 'flowbite-react'
import { CgDarkMode } from "react-icons/cg"

export default function Header() {
    const path = useLocation().pathname;
    return (
        <Navbar className='border-b-4'>
            <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white text'>
                <span className='px-2 py-1 bg-gradient-to-r from-violet-500 via-deeppink-500 to-pink-500 rounded-lg text-white'>
                    LucidLines
                </span>
                <span className='text-xl font-semibold text-dark purple-500 dark:text-white'>
                    Blog
                </span>
            </Link>
            <form>

                <TextInput type="search" id="default-search"
                    className="hidden lg:inline lock w-full p-4 ps-10 text-sm text-gray-900  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search..." rightIcon={AiOutlineSearch} />
            </form>
            <Button className='w-12 h-10 lg:hidden' color='gray' pill><AiOutlineSearch /></Button>
            <div className='flex gap-2 md:order-2'>
                <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
                    {/*By default it is hidden and at screen size small or greater it will be shown as inline*/}
                    <CgDarkMode />
                </Button>
                <Link to="/sign-in" className='sm:inline'>
                    <Button gradientDuoTone='purpleToBlue'>Sign In</Button>
                </Link>
                <Navbar.Toggle />
                {/*Navbar toggle is connecting to navbar collapse. when it collapses
                navbar toggle helps make a hamburger icon for responsiveness*/}
            </div>
            <Navbar.Collapse>
                {/*Part of navbar that collapses when screen size is small*/}

                {/*Navbar.Link and Link both create anchor tags in backend which is not allowed
                Hence we make it have property as={div} */}

                <Navbar.Link active={path === "/"} as={'div'}>
                    <Link to='/'>
                        Home
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/projects"} as={'div'}>
                    <Link to='/projects'>
                        Projects
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/about"} as={'div'}>
                    <Link to='/about'>
                        About
                    </Link>
                </Navbar.Link>


            </Navbar.Collapse>
        </Navbar >
    )
}
