import React from 'react';
import './Detail.css';
import Img from '../../assets/img/Kaloula_pulchra.JPG';
import Img2 from '../../assets/img/Kaloula_pulchra2.JPG';
import Animal from '../AnimalItem';

const Detail = () => {
    return (
        <div className="container detail">
            <div className="animal-name">Ễn ương</div>

            <div className="row">
                <div className="col-md animal-images">
                    <div className="animal-img-current">
                        <img src={Img} alt="img-current" className='animal-img__current' />
                    </div>

                    <div className="animal-images__list">
                        <img src={Img} alt="img-more" className='animal-img__more' />
                        <img src={Img2} alt="img-more" className='animal-img__more' />
                    </div>

                    <div className="animal-taxonomy">
                        <p className="taxonomy-title">Phân loại học</p>
                        <div className="taxonomy-wrap">
                            <p className="taxonomy-label">Tên khoa học: </p>
                            <p className="science-name taxonomy-values">Kaloula pulchra Gray, 1831</p>
                        </div>

                        <div className="taxonomy-wrap">
                            <p className="taxonomy-label">Tên địa phương: </p>
                            <p className="science-name-local taxonomy-values">Ễn ương</p>
                        </div>

                        <div className="taxonomy-wrap">
                            <p className="taxonomy-label">Ngành: </p>
                            <p className="animal-phylum taxonomy-values">Động vật có dây sống (chordata)</p>
                        </div>

                        <div className="taxonomy-wrap">
                            <p className="taxonomy-label">Lớp: </p>
                            <p className="animal-class taxonomy-values">AMPHIBIA (Linnaeus, 1758)</p>
                        </div>

                        <div className="taxonomy-wrap">
                            <p className="taxonomy-label">Bộ: </p>
                            <p className="animal-order taxonomy-values">GYMNOPHIONA (Muller, 1832)</p>
                        </div>

                        <div className="taxonomy-wrap">
                            <p className="taxonomy-label">Họ: </p>
                            <p className="animal-family taxonomy-values">Ichthyophiidae Taylor, 1968</p>
                        </div>
                    </div>

                    <div className='detail-search'>
                        <input className='detail-search-input' type="search" placeholder="Nhập vào đây để bắt đầu tìm kiếm..."></input>
                        <i class="fas fa-search detail-search-icon"></i>
                    </div>
                </div>

                <div className="col-md animal-characteristics">
                    <div className="animal-morphological">
                        <p className="morphological-title">Đặc điểm hình thái</p>
                        <p className="morphological-des morphological-des-diagnostic">Đặc điểm chẩn loại: Ngón chi dẹp
                            và đầu ngón tay mở rộng; toàn bộ mặt lưng màu nâu với 2 dãy màu vàng
                            sáng hoặc vàng nâu chạy dọc từ giữa 2 mắt qua phía trên mắt và kéo
                            dai đến háng; trên ngón có vết tích của màng bơi.</p>
                        <p className="morphological-des">Đặc điểm hình thái: Kích thước trung bình
                            (SVL: 80.3). Cơ thể có hình tam giác khi nhìn từ bên trên, đầu ngắn so với
                            chiều dài thân (HL/SVL: 0,24); chiều dài đầu nhỏ hơn chiều rộng đầu (HL/HW: 0,74);
                            khóe mắt nhỏ; vùng má xiên và hướng lên; mũi tù và ngắn, lỗ mũi nằm gần chóp
                            mỏ và hướng sang 2 bên; khoảng cách giữa hai lỗ mũi tương đương mí mắt trên;
                            màng nhĩ không rõ ràng; nếp gấp mờ vòng qua chẩm đến sau mắt và kết thúc ở
                            ngay trước cánh tay.Da trơn láng với các nốt sần rải rác trên lưng, nhiều nhất
                            ở phần dưới của mặt lưng, phía sau đùi và một số trên cánh tay. Mặt lưng màu nâu
                            sẫm. Hai dảy màu vàng sáng được bao bọc bởi viền màu nâu đậm hoặc đen bắt đầu từ
                            giữa hai mắt và kéo dài đến háng; hai dảy màu liền nhau ở giữa 2 mắt, hẹp ở sau
                            mắt và nở rộng trên mặt lưng. Một số cá thể giữa lưng có vệt đen hoặc nâu sậm
                            kéo dài từ giữa 2 mắt đến tận xương cụt. Các nốt sần trên lưng có màu tương tự
                            màu của hai dảy màu trên lưng. Trên các chi có màu không đều, các mảng nhỏ màu
                            vàng sáng không đều xen lẫn trên nền màu nâu sẫm; một vệt màu sáng không liên
                            tục phía trên mặt lưng của ống chân sau. Mặt bụng màu trắng sáng với các hoa
                            văn xám dạng khói, phần da trên cổ họng màu đậm hơn trên bụng.Cánh tay hơi dài;
                            ngón tay dài và có vết tích của màng bơi; to dần từ gốc ngón đến đầu ngón, đĩa
                            ngón rộng theo chiều ngang. Ngón thứ nhất ngắn hơn ngón thứ 2; củ bàn vừa phải;
                            có 3 củ bàn, củ bàn ngoài dài, củ bàn giữa nhỏ nhất, bàn tay trơn và không có 
                        nốt sần phụ. Thứ tự chiều dài tương đối của các ngón tay: III>IV>II>I. Chân ngắn,
                            chỉ 1/3 xương đùi tự do; cổ chân chạm đến nách khi xếp song song với trục cơ thể.
                            Hai gót chân không chạm nhau khi gập gối và xếp vuông góc trục cơ thể. Bàn chân dài
                            hơn bàn tay nhưng các ngón chân mảnh khảnh hơn; đĩa ngón chân nhỏ tròn, không rộng
                            theo chiều ngang như đĩa ngón tay; ngón chân có vết tích của màng bơi. Có 2 củ bàn
                            chân; củ bàn chân trong dài, nhô cao, cạnh không rõ ràng; củ bàn chân ngoài nhỏ tròn. 
                        Thứ tự chiều dài tương đối các ngón chân: IV>III>V>II>I.</p>
                    </div>

                    <div className="animal-ecological">
                        <p className="ecological-title">Đặc điểm sinh thái</p>
                        <p className="ecological-des">Một mẫu cái duy
                            nhất của loài này được tìm thấy trên nền rừng trong khu vực rừng tràm Mỹ Phước
                            khai thác vào mùa mưa (tháng 7). Là loài hoạt động về đêm, thường ẩn nấp trong
                            các hốc cây, hoặc bên dưới lớp lá mục trong mùa khô. Thường ra ngoài kiếm ăn
                            khi độ ẩm không khí cao hoặc sau cơn mưa. Sinh sản vào mùa mưa, con đực thường
                            phát tiếng kêu đặc trưng khi đang ngâm mình trên mặt nước (Kalamadi et al. 2002).
                            Ghi chú: qua phỏng vấn, người dân sinh sống xung quanh khu vực nghiên cứu cho
                            biết trước đây chưa từng tìm thấy loài này trong tự nhiên.</p>
                    </div>
                </div>


                <div className="animal-related">
                    <div className="animal-related-title">Các động vật liên quan</div>
                    <div className="row animal-related__list">
                        <Animal />
                        <Animal />
                        <Animal />
                        <Animal />
                        <Animal />
                        <Animal />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;