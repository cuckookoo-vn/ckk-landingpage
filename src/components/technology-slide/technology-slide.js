import './technology-slide.scss';

const TechnologySlide = ({images}) =>{
    return(
        <div className="technology-slide-box">
            <div className="technology-slide">
                {
                    images[0] &&
                    images[0].map((element, index)=>
                            <img key={index} src={element.image} alt="image-tech"/>
                    )
                }
            </div>
            <div className="technology-slide">
                {
                    images[1] &&
                    images[1].map((element, index)=>
                        <img key={index} src={element.image} alt="image-technology"/>
                    )
                }
            </div>
        </div>
    )
}

export default TechnologySlide;