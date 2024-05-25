
// src/components/TeamList.js
import React from 'react';

const TeamList = ({ team, onRemove, onSort }) => {
  const averageAge = team.length > 0 ? (team.reduce((acc, member) => acc + member.age, 0) / team.length).toFixed(2) : 0;

  return (
    <div className="column">
      <h2>Team Members</h2>
      {team.map(member => (
        <div key={member.id} className="team-member">
          <div className="employee-info">
            <span>{member.first_name} {member.last_name}</span>
            <span className="age">{member.age}</span>
          </div>
          <button className="button remove-button" onClick={() => onRemove(member.id)}>REMOVE</button>
        </div>
      ))}
      <div>
        <strong>Average Age:</strong> {averageAge}
      </div>
      {team.length > 0 && (
        <button className="button sort-button" onClick={onSort}>SORT BY AGE</button>
      )}
    </div>
  );
};

export default TeamList;

