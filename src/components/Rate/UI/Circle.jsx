import style from './Circle.module.scss'

export default function Circle({ children }) {
  return <div className={style.circleContainer}>{children}</div>
}
