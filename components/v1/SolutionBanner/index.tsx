import React from 'react'
import styles from './index.module.scss'
import Button from '../base/Button'

type IProps = {}

const BannerBox: React.FC<IProps> = (props) => {
  return (
    <div className={styles.bannerBox}>
      <div className={styles.title}>优选模板</div>
      <div className={styles.mainTitle}>
        覆盖<span>100+</span>热门行业
      </div>
      <div className={styles.desc}>
        <span>海量精选模板 简洁、高端、大气</span>
        <span>
          <i>一键自由拖拽</i>即刻开启出海之旅
        </span>
      </div>
      <div className={styles.btnNow}>
        <Button text="立即开始" />
      </div>

      <div className={`${styles.imgbox} ${styles.solution}`}></div>
    </div>
  )
}

export default BannerBox
