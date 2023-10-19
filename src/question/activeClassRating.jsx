import PropTypes from 'prop-types'
import { useMemo, useState } from 'react'
import { BsStarFill } from 'react-icons/bs'

const ActiveClassRating = () => {
  const [rate, setRate] = useState(0)
  const [rate2, setRate2] = useState(0)


  const handleSetRating = (rate) => setRate(rate)
  const handleSetRating2 = (rate) => setRate2(rate)

  function Rating({ rating, onClick }) {
    return (
      <div className='flex items-center gap-2'>
        {Array.from(Array(5)).map((_, i) => i + 1).map((_, i) =>
          <span key={i}
            onClick={() => onClick(i)}
            className={`${rating >= i ? 'text-amber-500' : 'text-black'} cursor-pointer text-4xl`}
          >*</span>
        )}
      </div>
    )
  }
  Rating.propTypes = {
    rating: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
  }

  function Rating2({ rating, onClick }) {
    const starRating = useMemo(() => {
      return Array(5)
        .fill(0)
        .map((_, i) => i + 1)
        .map((idx) => (
          <BsStarFill
            key={idx}
            onClick={() => onClick(idx)}
            className={`${rating >= idx ? 'text-amber-500' : 'text-black'} cursor-pointer`}
          />
        ));
    }, [rating, onClick]);
    return (
      <div className='flex items-center gap-2'>{starRating}</div>
    )
  }
  Rating2.propTypes = {
    rating: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
  }

  return (
    <>
      <Rating rating={rate} onClick={(rate) => handleSetRating(rate)} />
      <Rating2 rating={rate2} onClick={(rate) => handleSetRating2(rate)} />
    </>
  )
}

export default ActiveClassRating