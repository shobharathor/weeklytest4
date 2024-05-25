

import React, { useState } from 'react';
import EmployeeList from './components/EmployeeList';
import TeamList from './components/TeamList';
import './App.css';

const employeesData = [
  {"id":1,"first_name":"John","last_name":"Doe","age":25},
  {"id":2,"first_name":"Jane","last_name":"Smith","age":30},
  {"id":3,"first_name":"Robert","last_name":"Johnson","age":45},
  {"id":4,"first_name":"Mary","last_name":"Jones","age":28},
  {"id":5,"first_name":"Michael","last_name":"Brown","age":35},
  {"id":6,"first_name":"Linda","last_name":"Davis","age":40},
  {"id":7,"first_name":"William","last_name":"Miller","age":50},
  {"id":8,"first_name":"Barbara","last_name":"Wilson","age":38},
  {"id":9,"first_name":"James","last_name":"Moore","age":55},
  {"id":10,"first_name":"Patricia","last_name":"Taylor","age":32},
  {"id":11,"first_name":"Christopher","last_name":"Anderson","age":29},
  {"id":12,"first_name":"Susan","last_name":"Thomas","age":47},
  {"id":13,"first_name":"Daniel","last_name":"Jackson","age":53},
  {"id":14,"first_name":"Margaret","last_name":"White","age":26},
  {"id":15,"first_name":"Anthony","last_name":"Harris","age":37},
  {"id":16,"first_name":"Jessica","last_name":"Martin","age":33},
  {"id":17,"first_name":"Charles","last_name":"Thompson","age":44},
  {"id":18,"first_name":"Karen","last_name":"Garcia","age":41},
  {"id":19,"first_name":"Matthew","last_name":"Martinez","age":36},
  {"id":20,"first_name":"Nancy","last_name":"Robinson","age":39},
];

const App = () => {
  const [employees, setEmployees] = useState(employeesData);
  const [team, setTeam] = useState([]);
  const [disabledEmployees, setDisabledEmployees] = useState([]);

  const handleAdd = (id) => {
    const employeeToAdd = employees.find(employee => employee.id === id);
    setTeam([...team, employeeToAdd]);
    setDisabledEmployees([...disabledEmployees, id]);
  };

  const handleRemove = (id) => {
    setTeam(team.filter(member => member.id !== id));
    setDisabledEmployees(disabledEmployees.filter(empId => empId !== id));
  };

  const handleSort = () => {
    const sortedTeam = [...team].sort((a, b) => a.age - b.age);
    setTeam(sortedTeam);
  };

  return (
    <div className="container">
      <EmployeeList employees={employees} onAdd={handleAdd} disabledEmployees={disabledEmployees} />
      <TeamList team={team} onRemove={handleRemove} onSort={handleSort} />
    </div>
  );
};

export default App;
