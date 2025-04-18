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
    <article className="py-5 px-10">
      <span className="text-gray-300 block mb-4">ORDER SUMMARY</span>
      <h3 className="text-white mt-5 leading-relaxed">"I drink my coffee as 
        <span className="text-[#0e8684]"> {getAnswer('1')} </span> with a{' '}
        <span className="text-[#0e8684]">{getAnswer('2')}</span> type of bean.{' '}
        <span className="text-[#0e8684]">{getAnswer('3')}</span> Ground ala{' '}
        <span className="text-[#0e8684]">{getAnswer('4')}</span>, sent to me{' '}
        <span className="text-[#0e8684]">{getAnswer('5')}</span>."
      </h3>
    </article>
  );
};

export default Summary;


