import { ReactComponent as ThankIcon } from '../../images/illustration-thank-you.svg'
import styles from './Thank.module.scss'

export default function Thank({ starQuantity }) {
  return (
    <>
      <ThankIcon />
      <div className={styles.starInfo}>
        {`You selected ${starQuantity} out of 5`}
      </div>
      <div>
        <span>Thank you!</span>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </>
  )
}
