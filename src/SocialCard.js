import "./SocialCard.css";
const SocialCard = (props) => {
    function eventhandler(){
       // console.log(props.id);
       props.muser(props.userData);
    }
    return (

        <div className="card" onClick={eventhandler}>
            <div className="gen_loc">{props.userData.gender} {props.userData.nat}</div>
            <div className="card_title">{props.userData.name.title} {props.userData.name.first} {props.userData.name.last}</div>
            <div>{props.userData.email}</div>
        </div>
    );


};
//SocialCard.addEventListener('click',);

export default SocialCard;
