/*
import "./LabMember.css"

// const LabMember = () => {
//     const labMembers = [
//         {
//             name: 'John Doe',
//             image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk_pkM_rS8KU4a6VtRNXTukSpfCCtodto1ww&usqp=CAU',
//             position: 'Research Scientist',
//             description: 'John is an experienced researcher with expertise in various fields...',
//             socialMedia: {
//                 twitter: 'john_doe',
//                 linkedin: 'john.doe',
//             },
//             contact: {
//                 email: 'john.doe@example.com',
//                 phone: '123-456-7890',
//             },
//         },
//         {
//             name: 'John Doe',
//             image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk_pkM_rS8KU4a6VtRNXTukSpfCCtodto1ww&usqp=CAU',
//             position: 'Research Scientist',
//             description: 'John is an experienced researcher with expertise in various fields...',
//             socialMedia: {
//                 twitter: 'john_doe',
//                 linkedin: 'john.doe',
//             },
//             contact: {
//                 email: 'john.doe@example.com',
//                 phone: '123-456-7890',
//             },
//         },
//         {
//             name: 'John Doe',
//             image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk_pkM_rS8KU4a6VtRNXTukSpfCCtodto1ww&usqp=CAU',
//             position: 'Research Scientist',
//             description: 'John is an experienced researcher with expertise in various fields...',
//             socialMedia: {
//                 twitter: 'john_doe',
//                 linkedin: 'john.doe',
//             },
//             contact: {
//                 email: 'john.doe@example.com',
//                 phone: '123-456-7890',
//             },
//         },
//         {
//             name: 'John Doe',
//             image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk_pkM_rS8KU4a6VtRNXTukSpfCCtodto1ww&usqp=CAU',
//             position: 'Research Scientist',
//             description: 'John is an experienced researcher with expertise in various fields...',
//             socialMedia: {
//                 twitter: 'john_doe',
//                 linkedin: 'john.doe',
//             },
//             contact: {
//                 email: 'john.doe@example.com',
//                 phone: '123-456-7890',
//             },
//         },
//         {
//             name: 'John Doe',
//             image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk_pkM_rS8KU4a6VtRNXTukSpfCCtodto1ww&usqp=CAU',
//             position: 'Research Scientist',
//             description: 'John is an experienced researcher with expertise in various fields...',
//             socialMedia: {
//                 twitter: 'john_doe',
//                 linkedin: 'john.doe',
//             },
//             contact: {
//                 email: 'john.doe@example.com',
//                 phone: '123-456-7890',
//             },
//         },
//         {
//             name: 'John Doe',
//             image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk_pkM_rS8KU4a6VtRNXTukSpfCCtodto1ww&usqp=CAU',
//             position: 'Research Scientist',
//             description: 'John is an experienced researcher with expertise in various fields...',
//             socialMedia: {
//                 twitter: 'john_doe',
//                 linkedin: 'john.doe',
//             },
//             contact: {
//                 email: 'john.doe@example.com',
//                 phone: '123-456-7890',
//             },
//         },
//         // Add more lab members here
//     ];

//     return (
//         <div className="lab-member-container">
//             {labMembers.map((member, index) => (
//                 <div className="lab-member" key={index}>
//                     <img src={member.image} alt={member.name} className="member-image" />
//                     <div className="member-info">
//                         <h2>{member.name}</h2>
//                         <p>{member.position}</p>
//                         <p>{member.description}</p>
//                         <div className="social-media">
//                             <a href={`https://twitter.com/${member.socialMedia.twitter}`}>Twitter</a>
//                             <a href={`https://www.linkedin.com/in/${member.socialMedia.linkedin}`}>LinkedIn</a>
//                         </div>
//                         <div className="contact">
//                             <p>Email: {member.contact.email}</p>
//                             <p>Phone: {member.contact.phone}</p>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default LabMember;

import React from 'react';

const LabMember = () => {
  const labMembers = [
    {
      name: 'John Doe',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk_pkM_rS8KU4a6VtRNXTukSpfCCtodto1ww&usqp=CAU',
      position: 'Research Scientist',
      description: 'John is an experienced researcher with expertise in various fields...John is an experienced researcher with expertise in various fields...John is an experienced researcher with expertise in various fields...John is an experienced researcher with expertise in various fields...John is an experienced researcher with expertise in various fields...John is an experienced researcher with expertise in various fields...',
      socialMedia: {
        twitter: 'john_doe',
        linkedin: 'john.doe',
      },
      contact: {
        email: 'john.doe@example.com',
        phone: '123-456-7890',
      },
    },
    // Add more lab members here
  ];

  return (
    <div className="lab-member-container">
      {labMembers.map((member, index) => (
        <div className="lab-member" key={index}>
          <div className="image-container">
            <img src={member.image} alt={member.name} className="member-image" />
          </div>
          <div className="info-container">
            <h2>{member.name}</h2>
            <p>{member.position}</p>
            <p>{member.description}</p>
            <div className="social-media">
              <a href={`https://twitter.com/${member.socialMedia.twitter}`}>Twitter</a>
              <a href={`https://www.linkedin.com/in/${member.socialMedia.linkedin}`}>LinkedIn</a>
            </div>
            <div className="contact">
              <p>Email: {member.contact.email}</p>
              <p>Phone: {member.contact.phone}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LabMember;

*/

import React, { useState } from 'react';
import "./LabMember.css";
const LabMember = () => {
    const labMembers = [
        {
            name: 'Marianne Karplus',
            image: 'https://static.wixstatic.com/media/0e7d99_f67eea34e73043e4ab13a8c9c7af5889~mv2_d_5312_2988_s_4_2.jpg/v1/crop/x_566,y_0,w_2873,h_2988/fill/w_276,h_286,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0e7d99_f67eea34e73043e4ab13a8c9c7af5889~mv2_d_5312_2988_s_4_2.jpg',
            position: 'Ph.D. Assistant Professor mkarplus at utep dot edu',
            description:
                'Marianne leads the Lithospheric Geophysics group at UTEP, which is focused on using seismic and geophysical methods to better understand tectonics, earthquakes, geothermal areas, and glaciers. Marianne received her Ph.D. from Stanford University crustal geophysics group in 2012. She received her B.A. (double major) in Mathematics and Earth Sciences, with a minor in Physics from Dartmouth College in 2004. When she is not doing geophysics, she enjoys hiking with her dogs, playing ultimate frisbee, and baking geologically accurate cakes.',
            contact: {
                email: 'john.doe@example.com',
                phone: '123-456-7890',
            },
        },
        {
            name: 'John Doe',
            image: 'https://i.postimg.cc/7ZhMhJpC/chillhbe-1.png',
            position: 'Research Scientist',
            description:
                'John is an experienced researcher with expertise in various fields. He has contributed to numerous projects and has a passion for innovation and problem-solving. John is an avid reader and enjoys exploring the outdoors in his free time.',
            socialMedia: {
                twitter: 'john_doe',
                linkedin: 'john.doe',
            },
            contact: {
                email: 'john.doe@example.com',
                phone: '123-456-7890',
            },
        },
        {
            name: 'Marianne Karplus',
            image: 'https://static.wixstatic.com/media/0e7d99_f67eea34e73043e4ab13a8c9c7af5889~mv2_d_5312_2988_s_4_2.jpg/v1/crop/x_566,y_0,w_2873,h_2988/fill/w_276,h_286,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0e7d99_f67eea34e73043e4ab13a8c9c7af5889~mv2_d_5312_2988_s_4_2.jpg',
            position: 'Ph.D. Assistant Professor mkarplus at utep dot edu',
            description:
                'Marianne leads the Lithospheric Geophysics group at UTEP, which is focused on using seismic and geophysical methods to better understand tectonics, earthquakes, geothermal areas, and glaciers. Marianne received her Ph.D. from Stanford University crustal geophysics group in 2012. She received her B.A. (double major) in Mathematics and Earth Sciences, with a minor in Physics from Dartmouth College in 2004. When she is not doing geophysics, she enjoys hiking with her dogs, playing ultimate frisbee, and baking geologically accurate cakes.',
            contact: {
                email: 'john.doe@example.com',
                phone: '123-456-7890',
            },
        },
        
        // Add more lab members here
    ];

    const [expandedDescription, setExpandedDescription] = useState(null);

    return (
        <div className="lab-member-container">
            {labMembers.map((member, index) => (
                <div className="lab-member" key={index}>
                    <div className="image-container">
                        <img src={member.image} alt={member.name} className="member-image" />
                    </div>
                    <div className="info-container">
                        <h2>{member.name}</h2>
                        <p className='position'>{member.position}</p>
                        <p>
                            {expandedDescription === index
                                ? member.description
                                : `${member.description.slice(0, 150)}${member.description.length > 150 ? '...' : ''
                                }`}
                        </p>
                        {member.description.length > 150 && (
                            <p
                            style={{"color" : "blue" , "textDecoration" : "underline" , "cursor" : "pointer"}}
                                onClick={() =>
                                    setExpandedDescription(
                                        expandedDescription === index ? null : index
                                    )
                                }
                                className="read-more-button"
                            >
                                {expandedDescription === index ? 'Read Less' : 'Read More'}
                            </p>
                        )}
                        <br />
                        <div className="contact">
                            <p>Email: {member.contact.email}</p>
                            <p>Phone: {member.contact.phone}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LabMember;
