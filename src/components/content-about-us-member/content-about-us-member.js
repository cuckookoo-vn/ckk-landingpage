import './content-about-us-member.scss';
import {Trans} from "react-i18next";

const ContentAboutUsMember = ({element}) =>{

    return(
        <div className="content-about-us-member">
            <div className="box-content">
                <div className="box-information">
                    <img src={element.image} alt="image-member"/>
                    <span className="name-member">{element.name}</span>
                    <span className="position-member">{element.position}</span>
                </div>
                <div className="box-title">
                    <Trans
                        i18nKey="introduce-title1"
                        defaults={element.content}
                        components={{br: <br/>}}
                    />
                </div>
            </div>
        </div>
    )
}

export default ContentAboutUsMember;