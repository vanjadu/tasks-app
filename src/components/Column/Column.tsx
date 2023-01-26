import React from 'react'
import './column.sass'
import Card from '../../types/card'
// icons importi
import dotsIcon from '../../assets/icons/dots.svg'
import SingleCard from '../SingleCard'
import PrimaryBtn from '../PrimaryBtn'

interface Props {
  cards: Card[]
  title: string
}

const Column: React.FC<Props> = ({ cards, title }: Props) => {
  return (
    <div className='col'>
      <div className='col__header'>
        <h2 className='col__title'>
          {title} <span>({cards.length})</span>
        </h2>
        <img src={dotsIcon} alt='dots icon' className='col__icon' />
      </div>
      <div className='col__list'>
        {cards.map((card, idx) => (
          <SingleCard key={idx} {...card} />
        ))}
      </div>
      {/* Dugmetu mozemo menjati tekst tako sto bi recimo u HomeScreen
      komponenti passovali prop isto kao sto sam to uradio za title */}
      <PrimaryBtn text='+ Add a Task' />
    </div>
  )
}

export default Column
