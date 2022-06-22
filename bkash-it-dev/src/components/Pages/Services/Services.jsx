import React from 'react';
import Service from '../Service/Service';
import './Services.css';
import website from '../../../assest/images/website.jpg';
import digital from '../../../assest/images/digital.jpg';
import graphics from '../../../assest/images/graphics.jpg';
import hosting from '../../../assest/images/hosting.jpg';
import mobile from '../../../assest/images/mobileApp.jpg';
import onlineCourse from '../../../assest/images/onlineCourse.jpg';
import consulting from '../../../assest/images/consulting.jpg';
import software from '../../../assest/images/software.jpg';
import facebook from '../../../assest/images/facebook.jpg';
const fakeData = [
  { id: 1, img: `${website}`, title: 'Web Application' },
  { id: 2, img: `${software}`, title: 'Software Application' },
  { id: 3, img: `${digital}`, title: 'Digital Marketing' },
  { id: 4, img: `${mobile}`, title: 'Mobile App' },
  { id: 5, img: `${graphics}`, title: 'Graphics Design' },
  { id: 6, img: `${onlineCourse}`, title: 'Online Courses' },
  { id: 7, img: `${hosting}`, title: 'Web Hosting' },
  { id: 8, img: `${consulting}`, title: 'IT Consulting' },
  { id: 9, img: `${facebook}`, title: 'Facebook Ads Service' },
];
const Services = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='service-content'>
          <h1>Our Services</h1>
        </div>
        {fakeData.map((service, id) => (
          <Service service={service} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Services;
