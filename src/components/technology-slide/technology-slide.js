import './technology-slide.scss';

const TechnologySlide = ({images}) =>{
    return(
        <div className="technology-slide-box">
            <div className="technology-slide">
                {
                    images &&
                    images.map((element, index)=>
                            <img key={index} src={element.image} alt="image-tech"/>
                    )
                }
            </div>

        </div>
    )
}

export default TechnologySlide;