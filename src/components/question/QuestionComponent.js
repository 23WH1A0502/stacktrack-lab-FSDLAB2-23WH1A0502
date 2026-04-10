import React from 'react';
import { useState, useEffect } from 'react';

// TODO: Import any API functions you need from '../../api/client'
// Example: import { get, post } from '../../api/client';

function QuestionComponent() {
  const [questions, setQuestions] = useState([]);

  // TODO: Define state variables needed for your question set
  

  // TODO: Implement data fetching inside a useEffect hook
  useEffect(() => {
    fetch('https://bvrithcloud.com/api/questions',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Roll Number': '23WH1A0502'
      }
    })
      .then(response => response.json())
      .then(data => setQuestions(data))
      .catch(error => console.error('Error fetching questions:', error));
  }, []);
  // TODO: Implement any event handlers required by your question set
  

  return (
    <div>
      <h2>Questions</h2>
      {questions.map((question) => (
        <div key={question.id}>
          <h3>{question.title}</h3>
          <p>{question.description}</p>
          <p>Status: {question.status}</p>
        </div>
      ))}
      {/* TODO: Replace this placeholder with your question set UI */}
      <p>QuestionComponent placeholder — implement your assigned question set here.</p>

      {/* TODO: Render fetched data or form elements as required */}
    </div>
  );
}

export default QuestionComponent;
