import React from 'react'
import {FaTimes, FaEdit} from 'react-icons/fa'
import Card from '../card/Card'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackItem = ({item}) => {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
  
  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick={() => deleteFeedback(item.id)} className="close"><FaTimes color='purple'/></button>
        <button className="edit" onClick={() => editFeedback(item)} color='purple'>
          <FaEdit/>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem