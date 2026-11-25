import React, { useState } from 'react'
import './App.css'

function App() {
  const [feedback, setFeedback] = useState([]);
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);

  function addFeedback(e) {
    e.preventDefault()
    if (!name || !review || !rating) {
      alert("Please fill all the fields!");
      return;
    }
    const newFeedback = {
      id: feedback.length + 1,
      name,
      review,
      rating
    }
    setFeedback([...feedback, newFeedback])
    setName("");
    setReview("");
    setRating(5);
  }

  function deleteFeedback(id) {
    setFeedback(feedback.filter((f) => f.id !== id));
  }

  return (
    <div className='App'>
      <h1> Feedback Form</h1>
      <form onSubmit={addFeedback}>
        <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder='Review' value={review} onChange={(e) => setReview(e.target.value)} />
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      <h2>Feedbacks</h2>
      <div className='display-feedback'>

        {feedback.length == 0 && <p id='no-feedback'>No feedbacks yet</p>}
        {feedback.map((f) => (
          <div className='feedback-list' key={f.id}>
            <p><strong>{f.name}</strong></p>
            <p>{f.review}</p>
            <p>Rating: {f.rating}/5</p>
            <button onClick={() => deleteFeedback(f.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
