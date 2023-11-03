
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiFillCloseCircle, AiFillTag } from 'react-icons/ai'
import { BsFillCartFill, BsPerson } from 'react-icons/bs'
import { TbTruckReturn } from 'react-icons/tb'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { MdHelp, MdOutlineFavorite } from 'react-icons/md'
function TopNav() {
    const [sideNav, setSideNav] = useState(false);
    return (
        <div className='top-navbar'>
            <div className='burger-btn-div'>
                <div onClick={() => setSideNav(!sideNav)} style={{ cursor: 'pointer' }}>
                    <AiOutlineMenu size={25} />
                </div>
                <h1> Yum
                    <span style={{ fontWeight: '600' }}>Eats</span>
                </h1>
                <div className='top-navbar-free'>
                    <p className='free'>Free</p>
                    <p className='delivery'>Delivery</p>
                </div>
            </div>
            <div className='top-navbar-search'>
                <AiOutlineSearch size={25} />
                <input className='input' type='tsext' placeholder='search meals' />
            </div>
            <button className='top-navbar-cart-btn'><BsFillCartFill size={20} /> Cart</button>
            {sideNav ? <div className='overlayout' onClick={() => setSideNav(!sideNav)}></div> : ""}

            {sideNav ? <div className='sidenavbar'>
                <AiFillCloseCircle size={25}
                    onClick={() => setSideNav(!sideNav)}
                    className='close-side-navbar' />
                <h2>Yum <span>Eats</span></h2>
                <nav>
                    <ul>
                        <li style={{
                            fontSize: '1.25rem', lineHeight: '1.75rem', display: 'flex',
                            paddingTop: '1rem', paddingBottom: '1rem',
                        }}>
                            <BsPerson size={25}
                                style={{
                                    color: 'white', backgroundColor: 'black',
                                    borderRadius: '9999px',
                                    marginRight: '1rem'
                                }} />
                            My Account
                        </li>
                        <li style={{
                            fontSize: '1.25rem', lineHeight: '1.75rem', display: 'flex',
                            paddingTop: '1rem', paddingBottom: '1rem',
                        }}>
                            <TbTruckReturn size={25}
                                style={{
                                    color: 'white', backgroundColor: 'black',
                                    borderRadius: '9999px',
                                    marginRight: '1rem'
                                }} />
                            Delivery
                        </li>
                        <li style={{
                            fontSize: '1.25rem', lineHeight: '1.75rem', display: 'flex',
                            paddingTop: '1rem', paddingBottom: '1rem',
                        }}>
                            <MdOutlineFavorite size={25}
                                style={{
                                    color: 'white', backgroundColor: 'black',
                                    borderRadius: '9999px',
                                    marginRight: '1rem'
                                }} />
                            My Favorite
                        </li>
                        <li style={{
                            fontSize: '1.25rem', lineHeight: '1.75rem', display: 'flex',
                            paddingTop: '1rem', paddingBottom: '1rem',
                        }}>
                            <FaWallet size={25}
                                style={{
                                    color: 'white', backgroundColor: 'black',
                                    borderRadius: '9999px',
                                    marginRight: '1rem'
                                }} />
                            My Wallet
                        </li>
                        <li style={{
                            fontSize: '1.25rem', lineHeight: '1.75rem', display: 'flex',
                            paddingTop: '1rem', paddingBottom: '1rem',
                        }}>
                            <MdHelp size={25}
                                style={{
                                    color: 'white', backgroundColor: 'black',
                                    borderRadius: '9999px',
                                    marginRight: '1rem'
                                }} />
                            Help
                        </li>
                    </ul>
                </nav>
            </div> : ""}
        </div>
    )
}

export default TopNav
