import React from 'react';
import './Heading.css';

const Heading = () => {
    return (
        <div className='header'>
            <div className='logo'>
                .theAnimals
            </div>

            <div className='nav'>
                <ul className='nav-list'>
                    <li className='nav-list-item'>
                        <a href='home' className='nav-list-item__link'>
                            Trang chủ
                        </a>
                    </li>
                    <li className='nav-list-item'>
                        <a href='home' className='nav-list-item__link'>
                            Cách hoạt động
                        </a>
                    </li>
                    <li className='nav-list-item'>
                        <a href='home' className='nav-list-item__link'>
                            Thông tin
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Heading;