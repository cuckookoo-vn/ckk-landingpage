import './development-team-member.scss'

const DevelopmentTeamMember = ({image, name, position, setOpenPopup, setSlideIndex, index}) =>{

    const clickShowPopup = () =>{
        setOpenPopup(true);
        setSlideIndex(index);
    }

    return(
        <div className="development-team-member" onClick={()=>clickShowPopup()}>
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