import React from 'react';

import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Laurels.css';

const Laurels = () => (
  <div className='app__bg section__padding flex__center'>
    <div className='app__laurels'>
      <div className='app__laurels-awards'>
        <SubHeading title ="Awards & recognition"/>
        <h1 className='headtext__cormorant'>Our Laurels</h1>
        <div className='app__laurels-awards__boxes'>
          <div className='app__laurels-awards__box'>
              <img src={images.award02} alt="award" />
              <div>
                <p className='p__cormorant'>Bib Gourmond</p>
                <p classname="p__opensans">Lorem Ipsum Dolor Sit Amet, Consectetur.</p>
              </div>
          </div>
          <div className='app__laurels-awards__box'>
              <img src={images.award01} alt="award" />
              <div>
                <p className='p__cormorant'>Rising Star</p>
                <p classname="p__opensans">Lorem Ipsum Dolor Sit Amet, Consectetur.</p>
              </div>
          </div>
          <div className='app__laurels-awards__box'>
              <img src={images.award05} alt="award" />
              <div>
                <p className='p__cormorant'>AA Hospitality</p>
                <p classname="p__opensans">Lorem Ipsum Dolor Sit Amet, Consectetur.</p>
              </div>
          </div>
          <div className='app__laurels-awards__box'>
              <img src={images.award03} alt="award" />
              <div>
                <p className='p__cormorant'>Outstanding Chef</p>
                <p classname="p__opensans">Lorem Ipsum Dolor Sit Amet, Consectetur.</p>
              </div>
          </div>
        </div>
      </div>
      <div className='app__laurels-img'>
        <img src={images.laurels} alt=""/>
      </div>
    </div>
  </div>
);

export default Laurels;
