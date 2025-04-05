import React, { useState } from 'react';
import './UserForm.css';

function UserForm({ onCreate }) {
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [dietaryPreference, setDietaryPreference] = useState('No preference');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onCreate({ name, height, weight, dietaryPreference });
    setName('');
    setHeight('');
    setWeight('');
    setDietaryPreference('No preference');
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="number"
        name="height"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        placeholder="Height (cm)"
        required
      />
      <input
        type="number"
        name="weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        placeholder="Weight (lbs)"
        required
      />
      <select
        name="dietaryPreference"
        value={dietaryPreference}
        onChange={(e) => setDietaryPreference(e.target.value)}
        required
      >
        <option value="No preference">No preference</option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Vegan">Vegan</option>
      </select>
      <button type="submit">Add User</button>
    </form>
  );
}

export default UserForm;