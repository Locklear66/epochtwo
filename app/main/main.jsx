import React from 'react'
import pagecss from './main.module.css'
import Image from 'next/image'
import background from "/public/background.png"

export default function main() {
  return (
    <div className={pagecss.container}>
       <Image className={pagecss.image} src={background} alt="background"></Image>
    </div>
  )
}
