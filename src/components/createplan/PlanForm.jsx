import React,{ useState } from 'react'
import { questions } from '../../assets/data/data'
import Summary from './Summary';

const PlanForm = () => {
  const [answers, setAnswers] = useState({});

  const handleSelect = (questionId, option) => {
    setAnswers(prev => ({ ...prev, [questionId]: option }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order confirmed!");  
  };

  return (
    <div className='mt-20 lg:flex lg:gap-10'>
      <div className='text-xl text-gray-400 hidden lg:block lg:w-[30%] px-5'>
        <h2 className='pb-4 border-b border-gray-400'>01 Preferences</h2>
        <h2 className='py-4 border-b border-gray-400'>02 Bean Type</h2>
        <h2 className='py-4 border-b border-gray-400'>03 Quantity</h2>
        <h2 className='py-4 border-b border-gray-400'>04 Grind Option</h2>
        <h2 className='pt-4 '>05 Deliveries</h2>
      </div>
      <div className='lg:grow lg:w-[65%]'>
        <form onSubmit={handleSubmit} className="flex flex-col gap-14">
          {
            questions.map(q => (
              <div key={q.id} className=''>
                <h2 className="text-xl font-medium mb-3 text-gray-500 sm:text-2xl md:text-4xl">{q.question}</h2>
                <div className="flex gap-4 flex-col md:grid md:grid-cols-3 mt-8">
                  {
                    q.options.map(option => (
                      <div
                        key={option.name + q.id}
                        onClick={() => handleSelect(q.id, option.name)}
                        className={`cursor-pointer py-5 px-3.5 md:py-8 md:px-5 rounded-lg text-gray-700 ${answers[q.id] === option.name ? "bg-[#0e8684] text-white" : "bg-gray-200"}`}
                      >
                        <h3 className='text-lg md:text-2xl'>{option.name}</h3>
                        <p className='mt-2'>{option.discription}</p>
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }
          <Summary answers={answers} /> 
          <button
            type="submit"
            className="lg:w-fit lg:ml-auto"
          >
            Create plan
          </button>
        </form>
      </div> 
    </div>
  )
}

export default PlanForm;
