import React from "react";
import UserDataItem from "../UserDataItem/UserDataItem";
import "./UserDataList.css";

const UserDataList = (props) => {
  return (
    <ul className="data-list">
      {props.items.map((data) => (
        <UserDataItem 
        name={data.name} 
        age={data.age} key={data.id} />
      ))}
    </ul>
  );
};
export default UserDataList;
