import { useState } from 'react'
import style from './RateForm.module.scss'
import RateUs from './RateUs'
import Thank from './Thank'

export default function RateForm() {
  const [activeBtn, setActiveBtn] = useState(null)
  const [isSubmit, setIsSubmit] = useState(false)
  return (
    <div className={`${style.modal} ${isSubmit ? style.center : ''}`}>
      {!isSubmit ? (
        <RateUs
          activeBtn={activeBtn}
          setActiveBtn={setActiveBtn}
          submit={setIsSubmit}
        />
      ) : (
        <Thank starQuantity={activeBtn} />
      )}
    </div>
  )
}
