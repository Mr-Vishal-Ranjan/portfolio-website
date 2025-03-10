import Link from 'next/link';
import Image from 'next/image';

// Assets
import certificate from '../public/assets/meta-front-end-developer-certificate.png';

export default function Footer() {
  const socials = [
    {
      name: 'GitHub',
      link: 'https://github.com/Mr-Vishal-Ranjan',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/mr-vishal-ranjan/',
    },
    // {
    //   name: 'Medium',
    //   link: '#', //TODO : ADD LINK
    // },
    {
      name: 'Resume',
      link: '#', //TODO : ADD LINK
    },
  ];

  const menuItems = [
    { name: 'Skills', path: '/#skills' },
    // { name: 'Projects', path: '/#projects' },
    { name: 'Experience', path: '/#experience' },
    { name: 'Contact', path: '/#contact' },
  ];

  const menuItemsDisplay = menuItems.map(({ name, path }) => (
    <li key={name}>
      <Link href={path} scroll={false}>
        {name}
      </Link>
    </li>
  ));

  const socialsDisplay = socials.map(({ name, link }) => (
    <li key={name}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
    </li>
  ));

  return (
    <footer className="border-t border-t-primary-dark pt-6 dark:border-t-primary-light">
      <div className="my-8 grid gap-4 md:grid-cols-3 lg:max-w-3xl">
        <ul className="space-y-2">{menuItemsDisplay}</ul>
        <ul className="space-y-2">{socialsDisplay}</ul>
      </div>
    </footer>
  );
}
