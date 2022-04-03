import React from 'react';
import './AnimalItem.css';
import Img from '../assets/img/home_img.png';


const AnimalItem = () => {
    return (
        <div className="col-md-2 animal">
            <div className="animal-item">
                <div className="animal-item__img" style={{ backgroundImage: `url(${Img})` }} alt="animal-img"></div>

                <p className="animal-item__name">Kaloula Pulchra Gray</p>
                <p className="animal-item__des">Small body size; The back is flat,
                    gray or brown above, often with a mid-dorsal line and one or
                    two dark spots in the center of the back.
                </p>

                <p className="animal-item__more">Tìm hiểu thêm</p>
            </div>
        </div>
    )
}

export default AnimalItem;