

// src/components/EmployeeList.js
import React from 'react';

const EmployeeList = ({ employees, onAdd, disabledEmployees }) => {
  return (
    <div className="column">
      <h2>Employee List</h2>
      {employees.map(employee => (
        <div key={employee.id} className={`employee ${disabledEmployees.includes(employee.id) ? 'disabled' : ''}`}>
          <div className="employee-info">
            <span>{employee.first_name} {employee.last_name}</span>
            <span className="age">{employee.age}</span>
          </div>
          {!disabledEmployees.includes(employee.id) && (
            <button className="button add-button" onClick={() => onAdd(employee.id)}>ADD</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;

