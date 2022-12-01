import './development-team-member.scss'

const DevelopmentTeamMember = ({image, name ,position}) =>{

    return(
        <div className="development-team-member">
            <div className="development-team-member-box">
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