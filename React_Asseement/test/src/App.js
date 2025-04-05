import React from 'react';
import './App.css';
import UserProfile from './components/UserProfile';
import ClickButton from './components/ClickButton';
import TodoList from './components/TodoList';

function App() {
  const user = {
    name: 'Abubakar Diallo',
    bio: 'Student at BMCC',
    avatar: 'https://media.istockphoto.com/id/1438969575/photo/smiling-young-male-college-student-wearing-headphones-standing-in-a-classroom.jpg?s=1024x1024&w=is&k=20&c=jts1sdkLPskbbDU4_k56chBuOaxhqJGofM64c8VEUpM='
  };

  return (
    <div className="App">
      <UserProfile user={user} />
      <ClickButton />
      <TodoList />
    </div>
  );
}

export default App;