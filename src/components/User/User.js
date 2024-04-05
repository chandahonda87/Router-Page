import React from 'react';
import {useParams} from 'react-router-dom';

export default function User() {
    const {userId} = useParams();
  return (
    <div className="bg-warning text-dark text-center py-5">User</div>
  )
}
