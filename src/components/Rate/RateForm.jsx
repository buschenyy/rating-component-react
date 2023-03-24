import { useState } from 'react'
import style from './RateForm.module.scss'
import RateUs from './RateUs'

export default function RateForm() {
  const [activeBtn, setActiveBtn] = useState(null)
  return (
    <div className={style.modal}>
      <RateUs activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
    </div>
  )
}
