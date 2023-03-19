import styles from '../styles/Website.module.css'
import Box from './Box'
import Navbar from './Navbar'

export default function Website(){
    return (
        <div className={styles.background}>
            <Navbar/>


                <div className={styles.intro}>
                    <img id={styles.matsumoto} src='./matsumoto.jpg'/>
                    <div className={styles.introabout}>

                    <h2 className={styles.introtitle}> Hi, I'm Eric</h2>
                    <p className={styles.introtext}> I am computer science student at <em>Cal Poly SLO</em></p>
                    </div>

                </div>





        </div>
    )
}