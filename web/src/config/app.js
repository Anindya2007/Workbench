import AboutApp from '../app/About/About.jsx';
import ProjectsApp from '../app/Projects/Projects.jsx';
import ContactApp from '../app/Contact/Contact.jsx';
import GallaryApp from '../app/Gallery/Gallery.jsx';

import Resume from '../assets/Resume.png'
import About from '../assets/About.png'
import Contact from '../assets/Contact.png'
import Projects from '../assets/Projects.png';
import Gallery from '../assets/Gallery.png';

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
        'name': 'Gallery',
        'image': Gallery,
        'component': GallaryApp,
    }
    ];

export const appState=[
    {
        
    }
]