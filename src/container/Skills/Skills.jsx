import React from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import './Skills.scss';

const skills = [
  {
    name: 'React',
    bgColor: '#edf2f8',
    icon: images.react
  },
  {
    name: 'Git',
    bgColor: '#edf2f8',
    icon: images.git
  },
  {
    name: 'Figma',
    bgColor: '#edf2f8',
    icon: images.figma
  },
  {
    name: 'Node',
    bgColor: '#edf2f8',
    icon: images.node
  }
];

const experiences = [
  {
    year: '2022',
    works: {
      name: 'Frontend Developer',
      company: 'Google',
      description: 'I worked as a frontend developer at Google'
    }
  }
]

const Skills = () => {
  return (
    <>
      <h2 className='head-text'>Skills & Experience</h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills.map((skill) => (
            <motion.div
              whileInView={{opacity: [0, 1]}}
              transition={{duration: 0.5}}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div className='app__flex' style={{backgroundColor: skill.bgColor}}>
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className='app__skills-exp'>
            {experiences.map((experience) => (
              <motion.div
                className='app__skills-exp-item'
                key={experience.year}
              >
                <div className='app__skills-exp-year'>
                  <p className='bold-text'>{experience.year}</p>
                </div>
                <motion.div className='app__skills-exp-works'>
                  {experiences.map((experience)=>(
                    <>
                      <motion.div
                        whileInView={{opacity: [0, 1]}}
                        transition={{duration: 0.5}}
                        className="app__skills-exp-work"
                        data-tip
                        data-for={experience.works.name}
                        key={experience.works.name}
                      >
                        <h4 className='bold-text'>{experience.works.name}</h4>
                        <p className='p-text'>{experience.works.company}</p>
                      </motion.div>
                      <ReactTooltip
                        id={experience.works.name}
                        effect="solid"
                        arrowColor='$fff'
                        className='skills-tooltip'
                      >
                        {experience.works.description}
                      </ReactTooltip>
                    </>
                  ))}
                </motion.div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg'
);