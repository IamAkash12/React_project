import React, {useState} from 'react';
import UserDataList from './components/UserData/UserDataList';
import UserInput from './components/UserInput/UserInput';
import './App.css';

const App = () => {
  const[UserData, setUserData]= useState([]);


const addDataHandler = (uName, uAge) => {
  setUserData((prevUsersList) => {
    return [
      ...prevUsersList,
      { name: uName, age: uAge, id: Math.random().toString() },
    ];
  });
};
let content = (
  <p style={{ textAlign: 'center' }}>No Users found.</p>
);
if (UserData.length > 0) {
  content = (
    <UserDataList items={UserData}  />
  );
}
  return (
    <div>
      <section id="user-form">
        <UserInput onSaveUserData={addDataHandler} />
      </section>
      <section id="users">
        {content}
      </section>
    </div>
  );
};


export default App;
