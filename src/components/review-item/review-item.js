import './review-item.scss';
import {useEffect, useState} from "react";

const ReviewItem = ({element}) =>{
    const const_start = 5;

    const [assessStartRegular, setAssessStartRegular] = useState([]);
    const [assessStart,setAssessStart] = useState([]);

    const images = {
        star: "https://d2lonqwqrbh3kq.cloudfront.net/technology/ckksite-about-star.png",
        starFull: "https://d2lonqwqrbh3kq.cloudfront.net/technology/ckksite-about-star-full.png",
        partnersFrame:  process.env.PUBLIC_URL + '/images/partners/ckksite-partners-frame-review.png'
    }

    useEffect(()=>{
        let startRegular = [];
        let start = [];
        for (let i = 0; i < element.countStar; i++){
            startRegular.push(
                <img src={images.starFull}
                     alt="start-full"
                     className="assess-start"/>
            )
        }

        for (let i = 0; i < const_start - element.countStar; i++){
            start.push(
                <img src={images.star}
                     alt="start"
                     className="assess-start"/>
            )
        }

        setAssessStartRegular(startRegular);
        setAssessStart(start);
    },[])

    return(
        <div className="review-item">
            <div className="box-image">
                <img className="review-item-frame" src={images.partnersFrame} alt="partners-frame"/>
                <img className="review-item" src={element.image} alt="image-item" />
            </div>

            <div className="title-box">
                <div className="assess-box">
                    <div className="assess-name">
                        <span className="name">{element.name}</span>
                        {assessStartRegular}
                        {assessStart}
                    </div>
                    <span className="position">{element.position}</span>
                    <span className="content-review">{element.content}</span>
                </div>
            </div>
        </div>
    )
}

export default ReviewItem;