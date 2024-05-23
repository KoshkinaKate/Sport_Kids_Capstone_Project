import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Forum.css';

const Forum = () => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [editedQuestionBody, setEditedQuestionBody] = useState('');

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get('http://localhost:3000/questions');
      setQuestions(response.data.questions || []);
    } catch (error) {
      console.error('Error fetching questions:', error);
      setQuestions([]); // Set to empty array if there's an error
    }
  };

  const createQuestion = async () => {
    try {
      await axios.post('http://localhost:3000/questions', { body: newQuestion });
      setNewQuestion('');
      fetchQuestions();
    } catch (error) {
      console.error('Error creating question:', error);
    }
  };

  const deleteQuestion = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/questions/${id}`);
      fetchQuestions();
    } catch (error) {
      console.error('Error deleting question:', error);
    }
  };

  const updateQuestion = async (id) => {
    try {
      await axios.put(`http://localhost:3000/questions/${id}`, { body: editedQuestionBody });
      setEditingQuestion(null);
      setEditedQuestionBody('');
      fetchQuestions();
    } catch (error) {
      console.error('Error updating question:', error);
    }
  };

  const startEditing = (question) => {
    setEditingQuestion(question._id);
    setEditedQuestionBody(question.body);
  };

  return (
    <div className="forum-container">
      <h1 className="forum-header">Forum</h1>
      <div className="forum-input-container">
        <input
          type="text"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          placeholder="Ask a question..."
        />
        <button onClick={createQuestion}>Submit</button>
      </div>
      <ul className="forum-list">
        {questions.map((question, index) => (
          <li key={question._id}>
            <div className="question-number">Question {index + 1}</div>
            {editingQuestion === question._id ? (
              <div className="edit-input-container">
                <input
                  type="text"
                  value={editedQuestionBody}
                  onChange={(e) => setEditedQuestionBody(e.target.value)}
                />
                <div className="edit-buttons">
                  <button onClick={() => updateQuestion(question._id)}>Save</button>
                  <button
                    className="cancel-button"
                    onClick={() => setEditingQuestion(null)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="question-container">
                {question.body}
                <div>
                  <button onClick={() => startEditing(question)}>Edit</button>
                  <button onClick={() => deleteQuestion(question._id)}>Delete</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Forum;
