import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../redux/formSlice';

const Form: React.FC= () =>{
  const [title, setTitle]= useState<string>("");
  const [rating, setRating]= useState<number | string>("");
  const [category, setCategory]= useState<string>("");
  const dispatch= useDispatch();
  const disable= !(title && rating && category);

  const submit= (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    if (title && rating && category){
      dispatch(addMovie({title, rating, category}));
      setTitle("");
      setRating("");
      setCategory("");
    }
  }

  return (
    <form onSubmit={submit} className="mb-4">
      <input
        type="text"
        value={title}
        placeholder="Title"
        className="border p-2 mr-2"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={category}
        placeholder="Category"
        className="border p-2 mr-2"
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="number"
        min="1"
        max="10"
        step="0.1"
        value={rating}
        placeholder="Rating"
        className="border p-2 mr-2"
        onChange={(e) => setRating(e.target.value === '' ? '' : parseFloat(e.target.value))}
      />
      <button type="submit" disabled={disable} className={`bg-green-500 text-white p-2 rounded-md ${!disable ? "hover:bg-green-800": ""}`}>Submit</button>
    </form>
  )
}

export default Form;