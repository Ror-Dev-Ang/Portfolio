import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import './About.scss';

const abouts = [
  {
    title: 'Frontend Developer',
    description: 'I am a frontend developer with a passion for building beautiful and funtional web applications',
    imageUrl: images.about01
  },
  {
    title: 'Web Designer',
    description: 'I am a web designer with a passion for creating beautiful and funtional web applications',
    imageUrl: images.about02
  },
  {
    title: 'React/Angular',
    description: 'I am a React and Angular developer with a passion for building beautiful and funtional web applications',
    imageUrl: images.about03
  },
  {
    title: 'Backend Developer',
    description: 'I am a backend developer with a passion for building beautiful and funtional web applications',
    imageUrl: images.about04
  }
];

const About = () => {
  return (
    <>
      <h2 className='head-text'>I Know that <span>Good Development</span><br /> means <span>Good Business</span></h2>

      <div className='app__profiles'>
        {abouts.map((about,index)=>(
          <motion.div
            whileInView={{opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween'}}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imageUrl} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20}}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);