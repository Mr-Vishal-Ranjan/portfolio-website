export interface ExperienceDataTypes {
  title: string;
  link: string;
  place: string;
  time: string;
  type: string;
  workdone: {
    id: number;
    desc: string;
  }[];
}

export const experienceData: ExperienceDataTypes[] = [
  {
    title: 'Web Developer Intern',
    link: '#',
    place: `Vasitum INC`,
    time: 'Feb 2024 - Jan 2025',
    type: 'Internship',
    workdone: [
      {
        id: 1,
        desc: "Developed responsive, user-friendly interfaces and optimized workflows for an AI- driven recruitment platform using React.js, HTML, CSS, and JavaScript."
      },
      {
        id: 2,
        desc: "Revamped login/signup pages with Microsoft Flow integration, enhanced job application workflows, and built a secure, responsive blog CMS.",
      },
      {
        id: 3,
        desc: "Delivered key features like optional screening, search suggestions, and an offer management system with e-signature integration.",
      },
      {
        id: 4,
        desc: "Integrated Google Analytics 4 for user behavior tracking and improved SEO with meta tag updates.",
      },
      {
        id: 5,
        desc:"Deployed Kubernetes services, upgraded clusters, and optimized resource allocation for QA and Production environments.",
      },
      {
        id: 6,
        desc:"Published applications on Azure Marketplace and integrated monitoring tools like Kibana and Grafana.",
      },
      {
        id: 7,
        desc:"Utilized Docker, Kubernetes, Helm, and Jenkins for containerization,orchestration, and CI/CD pipelines.",
      },
      {
        id: 8,
        desc:"Improved platform responsiveness by 20% and delivered scalable, reliable solutions with modern DevOps and frontend practices.",
      },
    ],
  },

];