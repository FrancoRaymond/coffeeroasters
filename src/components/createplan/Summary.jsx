import React from 'react';

const Summary = ({ answers }) => {
  const defaultAnswers = {
    1: 'Capsule',
    2: 'Single origin',
    3: '250g',
    4: 'Wholebean',
    5: 'Every week',
  };

  const getAnswer = (key) => {
    return answers?.[key] || defaultAnswers[key];
  };

  return (
    <article className="py-5 px-10 bg-[url('/src/assets/images/plan/desktop/bg-steps.png')] bg-no-repeat bg-center bg-cover">
      <span className="text-[var(--color-primary)] block mb-4">ORDER SUMMARY</span>
      <h3 className="text-white mt-5 leading-relaxed" id='summary'>"I drink my coffee as 
        <span className="text-[var(--color-accent)]"> {getAnswer('1')} </span> with a{' '}
        <span className="text-[var(--color-accent)]">{getAnswer('2')}</span> type of bean.{' '}
        <span className="text-[var(--color-accent)]">{getAnswer('3')}</span> Ground ala{' '}
        <span className="text-[var(--color-accent)]">{getAnswer('4')}</span>, sent to me{' '}
        <span className="text-[var(--color-accent)]">{getAnswer('5')}</span>."
      </h3>
    </article>
  );
};

export default Summary;


