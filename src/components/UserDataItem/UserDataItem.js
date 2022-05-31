import React from "react";
import './UserDataItem.css';

const UserDataItem = props =>{
    
    return(
        <li className="data-item" >
            {props.children}
        </li>
    );
};

export default UserDataItem;