import AboutApp from '../app/About/About.jsx';
import ProjectsApp from '../app/Projects/Projects.jsx';
import ContactApp from '../app/Contact/Contact.jsx';
import GallaryApp from '../app/LeadershipJourney/Gallery.jsx';

import Resume from '../assets/apps/Resume.png'
import About from '../assets/apps/About.png'
import Contact from '../assets/apps/Contact.png'
import Projects from '../assets/apps/Projects.png';
import Gallery from '../assets/apps/Gallery.png';

import CampusConnect from '../assets/Gallery/CampusConnect.png';
import Prera from '../assets/Gallery/Prera.png';
import Aarambh from '../assets/Gallery/Aarambh.jpeg';
import Quantica from '../assets/Gallery/Quantica.png';
import Rexia from '../assets/Gallery/Rexia.jpeg';
import Damru from '../assets/Gallery/Damru.jpeg';

export const apps = [{
        'id': 1,
        'name': 'About Me',
        'image': About,
        'component': AboutApp,
    },
    {
        'id': 2,
        'name': 'Projects',
        'image': Projects,
        'component': ProjectsApp,

    },
    {
        'id': 3,
        'name': 'Resume',
        'image': Resume,
        'active': false
    },
    {
        'id': 4,
        'name': 'Contact',
        'image': Contact,
        'component': ContactApp,
    },
    {
        'id': 5,
        'name': 'Leadership Journey',
        'image': Gallery,
        'component': GallaryApp,
    }
    ];

export const gallery=[
    {
        name:'Campus Connect',
        role:'Founding Intern',
        pic:CampusConnect,
        desc:'Founding Intern at Campus Connect, working closely with the founders across operations, outreach, and strategic initiatives.'
    },
    {
        name:'Prera',
        role:'Partnership Manager',
        pic:Prera,
        desc:'Partnership Manager at Prera, leading partnership outreach, stakeholder communication, and collaboration initiatives to support event growth.'
    },
    {
        name:'Aarambh',
        role:'Organiser',
        pic:Aarambh,
        desc:'Organising Team Member for Aarambh, contributing to the planning and execution of the university’s junior orientation program.'
    },
    {
        name:'Quantica',
        role:'Outreach Head',
        pic:Quantica,
        desc:'Outreach Head at Quantica, leading outreach initiatives and driving participation for the university’s esports festival through community engagement and promotion.'
    },
    {
        name:'Rexia',
        role:'Operations,Events and Outreach Head',
        pic:Rexia,
        desc:'Head of Operations & Outreach at Rexia Starex University, coordinating event operations, outreach initiatives, and student engagement for university-level programs.'
    },
    {
        name:'Damru',
        role:'Crew',
        pic:Damru,
        desc:'Crew Member at Damru, contributing to event operations, coordination, and on-ground execution of university events.'
    },
]