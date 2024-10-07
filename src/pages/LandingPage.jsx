// CSS Modules localize CSS so that I can reuse class names and not have my styles interact
// with each other
import styles from './LandingPage.module.css'

// I'm putting all my data within a list for the three cards into a json within my assets directory
import cardinfo from '../assets/cardinfo.json'
import Card from '../components/Card'

// Each React component is essentially a function that returns a bunch of HTML so
// it's important that we wrap it all within a div
export default function LandingPage() {
    return (
        <div className={styles.layout}>
            <h1>welcome to wics dev project !</h1>
            <div className={styles.cardContainer}>
                {cardinfo.map (element => (
                    <Card card={element}></Card>
                ))}
            </div>
            <h3> 
                <a href="https://github.com/wics-uic/devproject-react-playground" className={styles.footer}>
                made w {"<"}3
                </a>
            </h3>
        </div>
    )
}