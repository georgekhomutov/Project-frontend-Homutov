import React, { useState } from 'react';
import axios from 'axios';
import './styles/feedbackForm.css';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    setSubmitting(true);
    setError('');

    try {
      const response = await axios.post('https://api.test.cyberia.studio/api/v1/feedbacks', {
        name,
        email,
        message,
      });

      if (response.status === 201) {
        alert('Спасибо за ваш отзыв!');
        setName('');
        setEmail('');
        setMessage('');
      } else if (response.status === 422) {
        const errors = response.data;
        setError(errors.message);
      } else {
        setError('Произошла ошибка при отправке отзыва');
      }
    } catch (error) {
      setError(error.message || 'Произошла ошибка при отправке отзыва');
    } finally {
      setSubmitting(false);
    }
  };

  const validateForm = () => {
    let isValid = true;

    if (!name.trim()) {
      setError('Пожалуйста, введите ваше имя');
      isValid = false;
    }

    if (!email.trim() || !validateEmail(email)) {
      setError('Пожалуйста, введите правильный адрес электронной почты');
      isValid = false;
    }

    if (!message.trim()) {
      setError('Пожалуйста, введите сообщение');
      isValid = false;
    }

    return isValid;
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <form className="feedback-form-container" onSubmit={handleSubmit}>
      <h2>Оставьте отзыв</h2>
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        placeholder="Ваше имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Ваш email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        placeholder="Ваш отзыв"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button type="submit" disabled={submitting}>
        {submitting ? 'Отправка...' : 'Отправить'
      }</button>
    </form>
  );
};

export default FeedbackForm;