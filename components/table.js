import { useState, useEffect } from 'react';
import { BiEdit, BiTrashAlt } from 'react-icons/bi';
import data from '../database/data.json';
import { getUsers } from '../lib/helper';
import { useQuery } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';
import { toggleChangeAction } from '../redux/reducer';

const Table = () => {
  const { isLoading, isError, data, error } = useQuery('users', getUsers);
  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error returning users</div>;

  return (
    <table className='min-w-full table-auto'>
      <thead>
        <tr className='bg-gray-800'>
          <th className='px-16 py-2'>
            <span className='text-gray-200'>Name</span>
          </th>
          <th className='px-16 py-2'>
            <span className='text-gray-200'>Email</span>
          </th>
          <th className='px-16 py-2'>
            <span className='text-gray-200'>Salary</span>
          </th>
          <th className='px-16 py-2'>
            <span className='text-gray-200'>Birthday</span>
          </th>
          <th className='px-16 py-2'>
            <span className='text-gray-200'>Status</span>
          </th>
          <th className='px-16 py-2'>
            <span className='text-gray-200'>Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className='bg-gray-200'>
        {data.map((object, index) => (
          <Tr {...object} key={index} />
        ))}
      </tbody>
    </table>
  );
};

function Tr({ id, name, avatar, email, salary, date, status }) {
  const visible = useSelector((state) => state.app.client.toggleForm);
  const dispatch = useDispatch();
  const onUpdate = () => {
    dispatch(toggleChangeAction());
  };

  return (
    <tr className='bg-gray-50 text-center'>
      <td className='px-16 py-2 flex flex-row items-center'>
        <img src={avatar || '#'} alt='avatar' />
        <span className='text-center ml-2 font-semibold'>
          {name || 'Unknown'}
        </span>
      </td>
      <td className='px-16 py-2'>
        <span>{email || 'Unknown'}</span>
      </td>
      <td className='px-16 py-2'>
        <span>{salary || 'Unknown'}</span>
      </td>
      <td className='px-16 py-2'>
        <span>{date || 'Unknown'}</span>
      </td>
      <td className='px-16 py-2'>
        <button className='cursor'>
          <span
            className={`${
              status === 'Active' ? 'bg-green-500' : 'bg-rose-500'
            } text-white px-5 py-1 rounded-full`}
          >
            {status || 'Unknown'}
          </span>
        </button>
      </td>
      <td className='px-16 py-2 flex justify-around gap-5 '>
        <button className='cursor' onClick={onUpdate}>
          <BiEdit size={25} color={'rgb(34,197,94)'} />
        </button>
        <button className='cursor'>
          <BiTrashAlt size={25} color={'rgb(244,63,94)'} />
        </button>
      </td>
    </tr>
  );
}

export default Table;
