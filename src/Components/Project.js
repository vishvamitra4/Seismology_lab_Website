import React from 'react';
import './Project.css';

const sampleData = [
  {
    srNo: 1,
    projectTitle: 'Project AProject AProject AProject A',
    description: 'Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet',
    principalInvestigator: 'John Doe',
    sponsoringAgency: 'ABC Agency',
    status: 'Completed',
  },
  {
    srNo: 1,
    projectTitle: 'Project AProject AProject AProject A',
    description: 'Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet',
    principalInvestigator: 'John Doe',
    sponsoringAgency: 'ABC Agency',
    status: 'Completed',
  },
  {
    srNo: 1,
    projectTitle: 'Project AProject AProject AProject A',
    description: 'Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet',
    principalInvestigator: 'John Doe',
    sponsoringAgency: 'ABC Agency',
    status: 'Completed',
  },
  {
    srNo: 2,
    projectTitle: 'Project B',
    description: 'Consectetur adipiscing elit',
    principalInvestigator: 'Jane Smith',
    sponsoringAgency: 'XYZ Agency',
    status: 'Ongoing',
  },
  // Add more data as needed
];

const Project = () => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>Project Title</th>
            <th>Description</th>
            <th>Principal Investigator</th>
            <th>Sponsoring Agency</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((data, index) => (
            <tr key={index}>
              <td>{data.srNo}</td>
              <td>{data.projectTitle}</td>
              <td>{data.description}</td>
              <td>{data.principalInvestigator}</td>
              <td>{data.sponsoringAgency}</td>
              <td className={data.status.toLowerCase()}>{data.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Project;
