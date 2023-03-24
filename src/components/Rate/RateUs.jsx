import { ReactComponent as StarIcon } from '../../images/icon-star.svg'
import styles from './RateUs.module.scss'
import Circle from './UI/Circle'

const rateButtons = [1, 2, 3, 4, 5]

export default function RateUs({ activeBtn, setActiveBtn }) {
  return (
    <>
      <Circle>
        <StarIcon />
      </Circle>
      <div>
        <span>How did we do?</span>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div className={styles.btnContainer}>
        {rateButtons.map((el) => (
          <button
            key={el}
            className={`${styles.rateBtn} ${
              activeBtn === el ? styles.active : ''
            }`}
            onClick={() => setActiveBtn(el)}
          >
            {el}
          </button>
        ))}
      </div>
      <button className={styles.submitBtn} type="submit">
        Submit
      </button>
    </>
  )
}
