const UserPersona = (props) =>{

    return(
        <div>
        <img src={props.image} alt = "User Image"> </img>
        {props.firstName}  {props.lastName}
     <br>
     </br>
     <strong> {props.job}</strong>

        </div>
    );
};

