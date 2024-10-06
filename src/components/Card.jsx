import styles from './Card.module.css'
import cat from '../assets/cat.png'
import cutecat from '../assets/cutiecat.png'

// This is our reusable card component
export default function Card ({card}) {
    return (
        <div className={styles.layout}> 
            <img src={cat}></img>
            <h2>{card.heading}</h2>
            <h4>{card.text}</h4>
        </div>
    );
}
