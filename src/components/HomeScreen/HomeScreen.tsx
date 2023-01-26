import React from 'react'
import './homescreen.sass'
import mockCards from '../../assets/mockCards'
import Card from '../../types/card'
import Column from '../Column'

const HomeScreen = (): JSX.Element => {
  // naravno postoji vise nacina da se kartice(taskovi) sortiraju, ja sam ovde koristio filter metodu
  // jer mi je bila najjednostavnija za implementaciju u ovoj situaciji
  const toDoCards: Card[] = mockCards.filter((card) => card.toDo === true)
  const inProgressCards: Card[] = mockCards.filter(
    (card) => card.inProgress === true
  )
  const forReviewCards: Card[] = mockCards.filter(
    (card) => card.forReview === true
  )
  const testingCards: Card[] = mockCards.filter((card) => card.testing === true)
  const doneCards: Card[] = mockCards.filter((card) => card.done === true)

  return (
    <section className='home'>
      {/* Ako postoje kartice sa propertijem xy, renderujemo ih,
       i prenosimo kartice u column komponentu kao i title prop*/}
      {toDoCards.length > 0 && <Column cards={toDoCards} title='To Do' />}
      {inProgressCards.length > 0 && (
        <Column cards={inProgressCards} title='In Progress' />
      )}
      {forReviewCards.length > 0 && (
        <Column cards={forReviewCards} title='Ready for review' />
      )}
      {testingCards.length > 0 && (
        <Column cards={testingCards} title='Testing' />
      )}
      {/* pre zavrsenih kartica stoji dugme za dodavanje novih taskova,
      malo sam se mucio sa ikonicom, mislim da samo nisam znao kako
      lepo da je eksportujem pa sam na kraju stavio samo + znak */}
      <div className='home__add'>+</div>
      {doneCards.length > 0 && (
        <Column cards={doneCards} title='Completed Tasks' />
      )}
    </section>
  )
}

export default HomeScreen
