import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaNodeJs,
  FaReact,
  FaFigma,
} from 'react-icons/fa';
import {
  SiRuby,
  SiRubyonrails,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiRedux,
  SiNextdotjs,
} from 'react-icons/si';

export const about = [
  {
    title: 'about me',
    description:
      "I'm a full stack developer based in Cape Town, specializing in creating dynamic and responsive web/mobile applications. With a strong foundation in both front-end and back-end technologies, I am passionate about delivering seamless and efficient user experiences. When I'm not coding, I enjoy exploring the vibrant culture and stunning landscapes of my beautiful city.",
    info: [
      { fieldName: 'Name', fieldValue: 'Mohamed Noor' },
      { fieldName: 'experience', fieldValue: '2+ years' },
      { fieldName: 'Email', fieldValue: 'mohmed.hassannoor114@gmail.com' },
      { fieldName: 'Freelance', fieldValue: 'available' },
      { fieldName: 'Language', fieldValue: 'english' },
    ],
  },
];

export const experience = [
  {
    icon: '',
    title: 'My experience',
    description:
      'Seasoned Full Stack Developer with a proven track record of enhancing legacy systems, mentoring junior developers, and delivering scalable solutions. Adept at designing, coding, testing, and implementing APIs and applications across multiple frameworks',
    items: [
      {
        company: 'Tech solutions Inc.',
        position: 'Full Stack Developer',
        duration: '2023 - present',
      },
      {
        company: 'Web Design Studio',
        position: 'Front-End Developer',
        duration: '2022 - 2023',
      },
      {
        company: 'E-commerce Startup',
        position: 'Ruby on Rails Developer',
        duration: '3 months contract',
      },
    ],
  },
];

export const education = [
  {
    icon: '',
    title: 'My education',
    description:
      'Spent 1500+ hours mastering algorithms, data structures, and full-stack development with Ruby, Ruby on Rails, JavaScript, React, and Redux.Developed skills in remote pair-programming using GitHub, industry-standard git-flow, and daily standups to communicate and collaborate with international remote developers.',
    items: [
      {
        institution: 'Microverse',
        Degree: 'Full Stack Web Development',
        duration: '2022 - 2023',
      },

      {
        institution: 'Online Course',
        Degree: 'NodeJS, ExpressJS and MongoDB',
        duration: '2024',
      },
    ],
  },
];

export const skills = [
  {
    title: 'My skills',
    description:
      'Spent 1500+ hours mastering algorithms, data structures, and full-stack development with Ruby, Ruby on Rails, JavaScript, React, and Redux.Developed skills in remote pair-programming using GitHub, industry-standard git-flow, and daily standups to communicate and collaborate with international remote developers.',
    skillList: [
      {
        icon: <FaHtml5 />,
        name: 'html 5',
      },
      {
        icon: <FaCss3 />,
        name: 'css 3',
      },
      {
        icon: <FaJs />,
        name: 'javaScript',
      },
      {
        icon: <FaReact />,
        name: 'react.js',
      },
      {
        icon: <SiRedux />,
        name: 'redux',
      },
      {
        icon: <SiNextdotjs />,
        name: 'next.js',
      },
      {
        icon: <FaNodeJs />,
        name: 'node.js',
      },
      {
        icon: <SiExpress />,
        name: 'Express.js',
      },
      {
        icon: <SiMongodb />,
        name: 'mongodb',
      },
      {
        icon: <SiPostgresql />,
        name: 'postgresql',
      },
      {
        icon: <SiRuby />,
        name: 'ruby',
      },
      {
        icon: <SiRubyonrails />,
        name: 'ruby on rails',
      },
      {
        icon: <SiTailwindcss />,
        name: 'tailwind.css',
      },
      {
        icon: <FaFigma />,
        name: 'figma',
      },
    ],
  },
];
