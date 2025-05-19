'use client'
import React from 'react'
import headercss from './headercss.module.css'
import Link from "next/link";

export default function header() {
  return (
    <div>
        <div className={headercss.container}>
            <h1 className={headercss.hero}>ENTER THE REALM WHERE LEGENDS BEGIN</h1>
            <p className={headercss.para}>Forge your destiny in a world shaped by ancient magic and epic wars.</p>
            <div className={headercss.cta_buttons}>
                <a href="#" className={headercss.btn_gold}>Play Now</a>
                <a href="#" className={headercss.btn_dark}>Watch Trailer</a>
            </div>
        </div>
    </div>
  )
}
