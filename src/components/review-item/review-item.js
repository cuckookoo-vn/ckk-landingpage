import './review-item.scss';
import {useEffect, useState} from "react";
import {cloudS3} from "../../constant/global";

const ReviewItem = ({element}) =>{
    const const_start = 5;

    const [assessStartRegular, setAssessStartRegular] = useState([]);
    const [assessStart,setAssessStart] = useState([]);

    const images = {
        star: cloudS3 + "technology/ckksite-about-star.png",
        starFull: cloudS3 + "technology/ckksite-about-star-full.png",
        partnersFrame:'https://d2lonqwqrbh3kq.cloudfront.net/partners/ckksite-partners-frame-review.png'
    }

    useEffect(()=>{
        let startRegular = [];
        let start = [];
        for (let i = 0; i < element.countStar; i++){
            startRegular.push(
                <img src={images.starFull}
                     key={i+"starFull"}
                     alt="start-full"
                     className="assess-start"/>
            )
        }

        for (let i = 0; i < const_start - element.countStar; i++){
            start.push(
                <img src={images.star}
                     key={i+"star"}
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