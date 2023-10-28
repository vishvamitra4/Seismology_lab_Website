import React from 'react';
import './Publication.css';

const Publications = [
  {
    id : 1,
    description : "7. Rasool, Y. and M. Agrawal (2022), Recent Advances in Earth Sciences with SpecialEmphasis - Natural Hazard: Evaluation of Seismic Hazard for Kishanganj, Bihar:Deterministic Approach and Comparison of Seismic Declustering Methods for BiharNepal Himalayan Region (India), North-Eastern Hill University (NEHU), Shillong.",
  },
  {
    id : 2,
    description : "7. Rasool, Y. and M. Agrawal (2022), Recent Advances in Earth Sciences with SpecialEmphasis - Natural Hazard: Evaluation of Seismic Hazard for Kishanganj, Bihar:Deterministic Approach and Comparison of Seismic Declustering Methods for BiharNepal Himalayan Region (India), North-Eastern Hill University (NEHU), Shillong.",
  },
  {
    id : 3,
    description : "7. Rasool, Y. and M. Agrawal (2022), Recent Advances in Earth Sciences with SpecialEmphasis - Natural Hazard: Evaluation of Seismic Hazard for Kishanganj, Bihar:Deterministic Approach and Comparison of Seismic Declustering Methods for BiharNepal Himalayan Region (India), North-Eastern Hill University (NEHU), Shillong.",
  },
];

const Publication = () => {
  return (
    <div className="publication-container">
      <h2>Published Papers</h2>
      <a style={{"color" : "blue"}} href = "https://people.iitism.ac.in/~download/publication/1155/1155.pdf">More</a>
      <ul className="publication-list">
        {Publications.map((item) => {
            return(
                <li className='publication-item'>
                    {item.description}
                </li>
            )
        })}
      </ul>
    </div>
  );
};

export default Publication;
