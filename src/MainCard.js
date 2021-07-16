import "./MainCard.css";
const MainCard = (props) => {
    const userData=props.m;
    return (

        <div className="m_card">
           
            <div className="user_image"><img src={userData.picture.thumbnail} alt="#"/></div>
           <div className="user_content">
           <div className="cardtitle">{userData.name.title} {userData.name.first} {userData.name.last}</div>
            <div className="location">{userData.location.street.number},{userData.location.street.name},{userData.location.city},{userData.location.state},{userData.location.country},{userData.location.postcode}</div>
            <div className="time_zone">{userData.location.timezone.offset},{userData.location.timezone.description}
           </div>
            </div>
        </div>
    );


};

export default MainCard;