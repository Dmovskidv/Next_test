import React from 'react';
import styles from './Navigation.module.scss';
import Link from 'next/link';

const navItems = [{
  name: 'Home',
  link: '/',
}, {
  name: 'Posts',
  link: '/posts',
},
{
  name: 'Users',
  link: '/users',
}];

const Navigation = () => {
  return (
    <div className={styles.container}>
      {navItems.map(({ name, link }) => (<Link href={link} key={link}><span>{name}</span></Link>))}
    </div>
  );
};

export default Navigation;