import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='container header'>
            <Link to="/" className='logo'>
                .theAnimals
            </Link>

            <div className='nav'>
                <ul className='nav-list'>
                    <li className='nav-list-item'>
                        <Link to="/" className='nav-list-item__link'>
                            Trang chủ
                        </Link>
                    </li>
                    <li className='nav-list-item'>
                        <Link to="/how_it_work" className='nav-list-item__link'>
                            Cách hoạt động
                        </Link>
                    </li>
                    <li className='nav-list-item'>
                        <Link to="/info" className='nav-list-item__link'>
                            Thông tin
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;