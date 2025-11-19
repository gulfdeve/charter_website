'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

const EmailSubscription = () => {
  const [email, setEmail] = useState('');
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const t = useTranslations();
  const handleSubmit = async e => {
    e.preventDefault();

    if (!email.trim()) {
      setErrorMessage('Email is required');
      return;
    }

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok && data.status === 'success') {
        setEmail('');
        setSubmissionSuccess(true);
        setErrorMessage('');

        setTimeout(() => setSubmissionSuccess(false), 5000);
      } else {
        setErrorMessage(data.message || 'Subscription failed');
      }
    } catch (error) {
      setErrorMessage('Network error, try again later');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="order-3 flex flex-col items-center max-w-md"
    >
      {submissionSuccess && (
        // <p className="mt-2 text-green-500 text-sm">Subscription successful!</p>
        <p className="mb-2 p-2 bg-green-100 border border-green-400 text-green-700 text-xs">
          Subscription Successful
        </p>
      )}
      {errorMessage && (
        <p className="mt-2 text-red-500 text-sm">{errorMessage}</p>
      )}
      <div className="flex w-full">
        <input
          type="email"
          placeholder={t('input.your-email')}
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="flex-grow px-6 py-4 text-sm font-bold text-primary-grey border border-l-4 roundedl-l-md bg-[#f5f5f5] text-primary-grey focus:outline-none border-primary-blue focus:bg-[#f3f7fd] transition duration-200 ease-in-out"
        />
        <button
          type="submit"
          className="bg-primary-blue rounded-r-md uppercase text-white text-xs sm:text-base px-4 py-3 font-bold text-primary-grey hover:bg-gray-400 border border-black"
        >
          {t('button.sign-up')}
        </button>
      </div>
    </form>
  );
};

export default EmailSubscription;
