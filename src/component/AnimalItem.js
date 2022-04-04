import React from 'react';
import { Link } from 'react-router-dom';
import './AnimalItem.css';
import Img from '../assets/img/Kaloula_pulchra2.JPG';


const AnimalItem = () => {
    return (
        <div className="col-md-2 animal">
            <Link to="/detail" className="animal-item">
                <div className="animal-item__img" style={{ backgroundImage: `url(${Img})` }} alt="animal-img"></div>

                <p className="animal-item__name">Ễn ương</p>
                <p className="animal-item__des">Kích thước trung bình (SVL: 80.3). 
                    Cơ thể có hình tam giác khi nhìn từ bên trên, đầu ngắn so với 
                    chiều dài thân (HL/SVL: 0,24); chiều dài đầu nhỏ hơn chiều rộng 
                    đầu (HL/HW: 0,74); khóe mắt nhỏ; vùng má xiên và hướng lên; mũi 
                    tù và ngắn, lỗ mũi nằm gần chóp mỏ và hướng sang 2 bên; khoảng 
                    cách giữa hai lỗ mũi tương đương mí mắt trên; màng nhĩ không rõ 
                    ràng; nếp gấp mờ vòng qua chẩm đến sau mắt và kết thúc ở ngay trước cánh tay.
                </p>

                <p className="animal-item__more">Tìm hiểu thêm</p>
            </Link>
        </div>
    )
}

export default AnimalItem;