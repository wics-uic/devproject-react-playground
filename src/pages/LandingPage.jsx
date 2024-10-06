// CSS Modules localize CSS so that I can reuse class names and not have my styles interact
// with each other
import styles from './LandingPage.module.css'

// Each React component is essentially a function that returns a bunch of HTML so
// it's important that we wrap it all within a div
export default function LandingPage() {
    return (
        <div className={styles.layout}>
            <h1>welcome to wics dev project !</h1>
        </div>
    )
}