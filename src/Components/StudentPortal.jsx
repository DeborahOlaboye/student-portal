import React, { useEffect, useState } from 'react'

export function StudentPortal({ students }) {
  return (
    <div className='student-list-container'>
      <h2>Student List</h2>
        <table className='student-list'>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email Address</th>
              <th>Address</th>
              <th>Level</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.phone}</td>
                <td>{student.email}</td>
                <td>{student.address}</td>
                <td>{student.level}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}

export default StudentPortal