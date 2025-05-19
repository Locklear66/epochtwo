import React from 'react'
import featurecss from './featurecss.module.css'
import Image from 'next/image'
import warrior from '/public/warrior.webp'

export default function features() {
  return (
    <div className={featurecss.container}>
  <p className={featurecss.para}>Feature</p>

  <div className={featurecss.imageRow}>
    <Image className={featurecss.image} src={warrior} alt="warrior picture" />
    <Image className={featurecss.image} src={warrior} alt="warrior picture" />
    <Image className={featurecss.image} src={warrior} alt="warrior picture" />
    <Image className={featurecss.image} src={warrior} alt="warrior picture" />
  </div>
</div>
  )
}
