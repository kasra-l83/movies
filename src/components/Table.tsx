import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { removeMovie } from '../redux/formSlice';

const Table: React.FC= () =>{
  const [sortOrder, setSortOrder]= useState<"asc" | "desc">("asc");
  const dispatch= useDispatch();
  const movie= useSelector((state: RootState) => state.form.movies);

  const remove= (index: number) =>{
    dispatch(removeMovie(index));
  }
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  }
  const sortedInputs= [...movie].sort((a, b) =>{
    return sortOrder === 'asc' ? Number(a.rating) - Number(b.rating) : Number(b.rating) - Number(a.rating);
  })

  return (
    <table className="w-full border">
      <thead className='bg-gray-300'>
        <tr>
          <th className="border">Title</th>
          <th className="border">Category</th>
          <th className="border cursor-pointer" onClick={toggleSortOrder}>Rating</th>
          <th className="border">Actions</th>
        </tr>
      </thead>
      <tbody>
        {sortedInputs.map((input, index) => (
          <tr key={index}>
            <td className="border">{input.title}</td>
            <td className="border">{input.category}</td>
            <td className="border">{input.rating}</td>
            <td className="border py-1">
              <button onClick={() => remove(index)} className="bg-red-500 hover:bg-red-800 text-white py-1 px-2 rounded-md">Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
export default Table;