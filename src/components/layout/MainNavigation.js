import { Link } from "react-router-dom";

import styles from './MainNavigation.module.css';

export default function MainNavigation(){
    return (
        <header className={styles.header}>
            <div className={styles.logo}>React Meetups</div>
            <nav>
                <ul className>
                    <li> <Link to="/">All Meetups</Link></li>
                    <li> <Link to="/new-meetup">Add New Meetup</Link> </li>
                    <li> <Link to="/favourites">My Favourites</Link> </li>
                </ul>
            </nav>
        </header>
    );
}