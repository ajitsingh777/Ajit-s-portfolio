import self from "../images/ajit.jpg";
import { colors } from "../colors/mainGradient";

export const info = {
  firstName: "Navdeep",
  lastName: "Singh",
  initials: "NS", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Full Stack Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "🇮🇳",
      text: "based in the Hyderabad, India",
    },
    {
      emoji: "💻",
      text: "Full Stack Developer at Microsoft Corp.",
    },
    {
      emoji: "📧",
      text: "ajit.dhaliwal08@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://andy8647.com/andy.pdf",
      icon: "fa fa-user-circle",
      label: "resume",
    },
    {
      link: "https://instagram.com/andy_lgc?igshid=YmMyMTA2M2Y=",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com/Andy8647",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/gancheng-luo-andy/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://twitter.com/Andy8647L",
      icon: "fa fa-twitter",
      label: "twitter",
    },
    {
      link: "https://500px.com/p/andy8647lgc?view=photos",
      icon: "fa fa-500px",
      label: "500px",
    },
  ],
  bio: "Hello! I'm Gancheng (Andy) Luo. I'm a Full Stack Developer. I studied CompSci at UofT, I enjoy building web applications and learning new technologies. I'm currently working at commonsku as a Full Stack Developer. I'm also a freelance photographer. I love to travel and explore new places. I'm currently based in Toronto, Canada.",
  skills: {
    languages: [
      "TypeScript",
      "JavaScript",
      "Java",
      "PHP",
      "Python",
      "HTML/CSS",
    ],
    frameworks: [
      "React",
      "Redux",
      "Material UI",
      "Vue",
      "Express",
      "NestJS",
      "Spring Boot",
      "Bootstrap/jQuery",
      "Zend",
      "Django",
    ],
    databases: ["MySQl", "MongoDB", "PostgreSQL", "Mybatis", "TypeORM"],
    cloudServices: [
      "AWS S3",
      "AWS EC2",
      "AWS SNS",
      "Google Analytics",
      "Heroku",
      "Netlify",
    ],
    tools: [
      "Git",
      "Postman",
      "Docker",
      "Swagger",
      "Elasticsearch",
      "npm",
      "yarn",
      "Maven",
      "Jenkins",
      "Jira",
      "Confluence",
      "Bitbucket",
    ],
  },
  hobbies: [
    {
      label: "Photography",
      emoji: "📷",
    },
    {
      label: "Video Games",
      emoji: "🎮",
    },
    {
      label: "Guitar",
      emoji: "🎸",
    },
    {
      label: "Anime",
      emoji: "🎞",
    },
    {
      label: "Cooking",
      emoji: "🍳",
    },
    {
      label: "Traveling",
      emoji: "✈️",
    },
    {
      label: "Fishing",
      emoji: "🎣",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Open Source React Portfolio Template",
      live: "https://andy8647.com", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/Andy8647/react-portfolio-template", // this should be a link to the **repository** of the project, where the code is hosted.
      image: "https://andy8647.com/website.jpg",
    },
    {
      title:
        "CryptoGoGo - Online Cryptocurrency Community and Trading platform",
      live: null, //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/Andy8647/CryptoGoGo", // this should be a link to the **repository** of the project, where the code is hosted.
      image: "https://i.ibb.co/6BsWs6f/01.jpg",
    },
    {
      title:
        "Dynrank.js - High-performance dynamic bar chart visualization library",
      live: null,
      source: "https://github.com/Andy8647/dynrank",
      image: "https://i.ibb.co/HFkMKtH/02.jpg",
    },
  ],
};
