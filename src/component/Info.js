import React from 'react';
import './Info.css';
import Animal from './AnimalItem';

const Info = () => {
    return (
        <div className="container info">
            <div className="row info-heading">
                <p className="title info-title">Thông Tin Các Loài Động Vật</p>
                <p className="info-des">Cập nhật thông tin các loài động vật từ khắp nơi trên thế giới.</p>

                <div className="info-filter">
                    <p className="title-filter">Sắp xếp</p>

                    <button className="filter-btn filter-btn__a-z">Từ A - Z</button>
                    <button className="filter-btn filter-btn__z-a">Từ Z - A</button>
                </div>
            </div>

            <div className="row info-list">
                <Animal />
                <Animal />
                <Animal />
                <Animal />
                <Animal />
                <Animal />
                <Animal />
                <Animal />
                <Animal />
            </div>

            <div className="info-load-more">Tải thêm...</div>
        </div>
    );
}

export default Info;