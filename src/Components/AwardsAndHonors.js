import React from 'react';
import './AwardsAndHonors.css';

const awardsData = [
  {
    title: 'Best Researcher Award',
    description: 'Awarded for outstanding contributions to the field of science.',
    imageUrl: 'https://media.istockphoto.com/id/1365329728/photo/african-male-lion-wildlife-animal-black-and-white-but-with-colored-eyes.webp?b=1&s=170667a&w=0&k=20&c=htVsEvFs7iDLj5k3SWwfe9Su3QxorNxcYKHvgENPdF8=', // Replace with actual image URL
  },
  {
    title: 'Excellence in Teaching',
    description: 'Recognized for exceptional teaching and mentoring students.',
    imageUrl: 'https://static.wixstatic.com/media/0e7d99_f67eea34e73043e4ab13a8c9c7af5889~mv2_d_5312_2988_s_4_2.jpg/v1/crop/x_566,y_0,w_2873,h_2988/fill/w_276,h_286,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0e7d99_f67eea34e73043e4ab13a8c9c7af5889~mv2_d_5312_2988_s_4_2.jpg', // Replace with actual image URL
  },
  {
    title: 'Excellence in Teaching',
    description: 'Recognized for exceptional teaching and mentoring students.',
    imageUrl: 'https://media.istockphoto.com/id/1365329728/photo/african-male-lion-wildlife-animal-black-and-white-but-with-colored-eyes.webp?b=1&s=170667a&w=0&k=20&c=htVsEvFs7iDLj5k3SWwfe9Su3QxorNxcYKHvgENPdF8=', // Replace with actual image URL
  },
  {
    title: 'Excellence in Teaching',
    description: 'Recognized for exceptional teaching and mentoring students.',
    imageUrl: 'https://i.postimg.cc/7ZhMhJpC/chillhbe-1.png', // Replace with actual image URL
  },
  // Add more award objects as needed
];

const AwardsAndHonors = () => {
  return (
    <div className="awards-container">
      <h2>Awards and Honors</h2>
      <div className="awards-list">
        {awardsData.map((award, index) => (
          <div key={index} className="award-item">
            <div className="award-card">
              <div className="award-front">
                <img src={award.imageUrl} alt={award.title} className="award-image" />
                <h3 className="award-title">{award.title}</h3>
              </div>
              <div className="award-back">
                <p className="award-description">{award.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardsAndHonors;
