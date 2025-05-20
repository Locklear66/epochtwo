'use client'
import { useState } from 'react'
import React from 'react'
import navcss from './navcss.module.css'
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';

export default function nav() {

    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
        <div className={navcss.container}>
          <div className={navcss.logo}>
            Epoch of Genesis
          </div>

           {/* Hamburger button */}
        <button
          className={navcss.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span className={navcss.icon}>☰</span>
        </button>

        <ul className={`${navcss.nav__links} ${menuOpen ? navcss.open : ''}`}>
            <li><a className={navcss.link} href="#">Home</a></li>
            <li><a className={navcss.link} href="#">Lore</a></li>
            <li><a className={navcss.link} href="#">Media</a></li>
            <li><a className={navcss.link} href="#">Community</a></li>
            <li><a className={navcss.link} href="#">Sign Up</a></li>
          </ul>
        </div>
    </nav>
  )
}
