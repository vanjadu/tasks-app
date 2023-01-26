import React from 'react'
import './primarybtn.sass'

interface btnProps {
  text: string
  children?: React.ReactNode
}

const PrimaryBtn: React.FC<btnProps> = ({ text, children }): JSX.Element => {
  return (
    <button className='btn'>
      {text}
      {children && children}
    </button>
  )
}

export default PrimaryBtn
