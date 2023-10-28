import React from 'react';
import './Collaborations.css';

const collaborationData = {
  indianCollaborations: [
    {
      name: 'Indian Institute of Technology Bombay',
      description: 'Joint research project on renewable energy',
    },
    {
      name: 'Tata Consultancy Services (TCS)',
      description: 'Collaborative internship program for studentsCollaborative internship program for studentsCollaborative internship program for studentsCollaborative internship program for studentsCollaborative internship program for students',
    },
  ],
  internationalCollaborations: [
    {
      name: 'Stanford University',
      description: 'Research partnership on artificial intelligence',
    },
    {
      name: 'University of Oxford',
      description: 'Student exchange program and joint conferences',
    },
  ],
};

const Collaborations = () => {
  return (
    <div className="collaborations-container">
      <h2>Indian Collaborations</h2>
      <ul className="collaboration-list">
        {collaborationData.indianCollaborations.map((collaboration, index) => (
          <li key={index} className="collaboration-item">
            <h3 className="collaboration-name">{collaboration.name}</h3>
            <p className="collaboration-description">{collaboration.description}</p>
          </li>
        ))}
      </ul>

      <h2>International Collaborations</h2>
      <ul className="collaboration-list">
        {collaborationData.internationalCollaborations.map((collaboration, index) => (
          <li key={index} className="collaboration-item">
            <h3 className="collaboration-name">{collaboration.name}</h3>
            <p className="collaboration-description">{collaboration.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Collaborations;
