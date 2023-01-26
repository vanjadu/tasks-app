import React from 'react'
import './singlecard.sass'
import Card from '../../types/card'
import rectangleIcon from '../../assets/icons/rectangle.svg'
import subtasksIcon from '../../assets/icons/subtasks.svg'
import Avatars from '../Avatars'

const SingleCard: React.FC<Card> = ({
  title,
  dueDate,
  messages,
  subtasks,
  labels,
  avatars,
  done,
}: Card): JSX.Element => {
  // sto se tice ovog return-a, on je vrlo jednostavan, samo renderujem podatke svakog taska
  // malo sam se pomucio sa ikonicama
  // sto se stajlinga tice na tome uvek moze da se poradi
  // ja sam izabrao da iskoristim SASS za ovaj test projekat
  // light / dark teme su nesto sto bih mogao da dodam kroz recimo daisyUI i taiwlindcss
  // ali sam odlucio da se fokusiram na TypeScript i React

  return (
    <div className={done ? 'single done' : 'single'}>
      <p className='single__title'>{title}</p>
      <div className='single__more'>
        {labels && (
          <div className='single__info'>
            <div className='single__circle'></div>
            <div className='single__circle'></div>
            <div className='single__circle'></div>
          </div>
        )}
        {messages && (
          <div className='single__info'>
            <img src={rectangleIcon} alt='' className='single__icon' />
            <p className='single__desc'>{messages}</p>
          </div>
        )}
        {subtasks && (
          <div className='single__info'>
            <img src={subtasksIcon} alt='' className='single__icon' />
            <p className='single__desc'>{subtasks}</p>
          </div>
        )}
      </div>
      <div className='single__down'>
        <p className='single__date'>{dueDate}</p>
        <div className='single__avatars'>
          {avatars && <Avatars avatars={avatars} />}
        </div>
      </div>
    </div>
  )
}

export default SingleCard
