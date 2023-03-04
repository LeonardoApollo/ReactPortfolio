import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    firebase,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Figma",
      icon: figma,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Be the First One",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Here might be a date, when you hired me",
      points: [
        "Things that i need to do for you",
        "More things that i need to do for you",
        "Wow! Even more things that i need to do for you",
        "Waiting to be hired",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Be the First One",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Here might be a date, when you hired me",
      points: [
        "Things that i need to do for you",
        "More things that i need to do for you",
        "Wow! Even more things that i need to do for you",
        "Waiting to be hired",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Be the First One",
      icon: shopify,
      iconBg: "#383E56",
      date: "Here might be a date, when you hired me",
      points: [
        "Things that i need to do for you",
        "More things that i need to do for you",
        "Wow! Even more things that i need to do for you",
        "Waiting to be hired",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Be the First One",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Here might be a date, when you hired me",
      points: [
        "Things that i need to do for you",
        "More things that i need to do for you",
        "Wow! Even more things that i need to do for you",
        "Waiting to be hired",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I am looking forward to any feedback about me",
      name: "Leave your beautiful name here",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I am looking forward to any feedback about me",
      name: "Leave your beautiful name here",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "I am looking forward to any feedback about me",
      name: "Leave your beautiful name here",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  // Обязательно изменить, когда я начну искать работу!!!
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };