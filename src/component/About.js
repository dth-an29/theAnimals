import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import Img from '../assets/img/about_img.png';

const About = () => {
    return (
        <div className="container about">
            <div className="row">
                <div className="col-md about-image">
                    <img className='about-img' src={Img} alt="about-img"></img>
                </div>

                <div className="col-md about-content">
                    <p className="title about-title">Cách Hoạt Động</p>
                    <p className="about-des">Các bước để có thông tin bạn muốn:</p>

                    <div className="step">
                        <div className="about-step">
                            <i class="fa-brands fa-sistrix step-icon"></i>
                            <p className="title-step">Bước 1</p>
                            <p className="des-step">Gõ từ khóa cần tìm vào ô tìm kiếm.</p>
                        </div>

                        <div className="about-step">
                            <i class="fa-solid fa-list step-icon"></i>
                            <p className="title-step">Bước 2</p>
                            <p className="des-step">Một danh sách động vật trùng khớp với từ khóa sẽ được hiển thị.</p>
                        </div>
                    </div>

                    <Link to="/" className='about-btn'>Hãy thử nào</Link>
                </div>
            </div>
        </div>
    );
}

export default About;