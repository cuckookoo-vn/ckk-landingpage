import './development-team-member.scss'

const DevelopmentTeamMember = ({image, name ,position}) =>{
    const images = {
        boxMember: "https://ckksite.s3.ap-northeast-2.amazonaws.com/about-us/ckksite-about-us-team-frame.png",
    }
    return(
        <div className="development-team-member">
            <div className="development-team-member-box"
                 style={{backgroundImage:`url(${images.boxMember})`}}>
                <img className="image-member"
                     src={image}
                     alt="member" />
                <span className="name-member">{name}</span>
            </div>
            <span className="position-member">{position}</span>
        </div>
    )
}

export default DevelopmentTeamMember;