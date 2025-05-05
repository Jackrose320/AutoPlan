import { useState } from 'react';

function LessonApp() {

    const [topic, setTopic] = useState('');
    const [grade, setGrade] = useState('');
    const [loading, setLoading] = useState(false);
    const [plan, setPlan] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Generating plan for:", topic, grade);
    setLoading(true);
    setPlan(null);
  
    setTimeout(() => {
      const mockResponse = {
        title: `Lesson Plan for ${topic} (${grade})`,
        objective: `Students will understand key concepts of ${topic}.`,
        materials: ["Whiteboard", "Worksheets", "Video clips"],
        steps: [
          "Introduce the topic with a brief discussion.",
          `Explain main ideas of ${topic} using visuals.`,
          "Break into small groups for practice.",
          "Review together and assign homework.",
        ],
      };
      setPlan(mockResponse);
      setLoading(false);
    }, 1500);
  };

  return (<>
    <h3 className="text-2xl font-semibold mb-6 title">Generate a Lesson Plan!</h3>
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
    <input
      type="text"
      value={topic}
      onChange={(e) => setTopic(e.target.value)}
      placeholder="Topic (e.g. Fractions, Civil War)"
      className="w-full border px-4 py-3 rounded-lg bg-white text-white"
    />
    <input
      type="text"
      value={grade}
      onChange={(e) => setGrade(e.target.value)}
      placeholder="Grade Level (e.g. 5th Grade)"
      className="ml-2 w-full border px-4 py-3 rounded-lg bg-white text-white"
    />
    <button
      type="submit"
      className="bg-blue-600 text-white px-6 py-3 rounded-lg ml-2"
    >
      Generate Plan
    </button>
    </form>
    {loading && (
    <p className="mt-6 text-blue-600 font-semibold loading-text">Generating your plan...</p>
  )}
  
  {plan && (
    <div className="plan-container">
      <h4 className="font-bold mb-4">
        Lesson Plan for <em>{topic}</em> ({grade})
      </h4>
      <p><strong>Objective: </strong> 
        {plan.objective.split(topic).map((part, index) => (
          index === 0 ? part : <>
            <em key={index}>{topic}</em>{part && /[.,!?;]$/.test(part) ? part : ''}
          </>
        ))}
      </p>
      <p><strong>Materials:</strong></p>
      <ul className="mb-2">
        {plan.materials.map((item, idx) => (
          <li className="mt-2" key={idx}>{item}</li>
        ))}
      </ul>
      <p className="mb-2"><strong>Steps:</strong></p>
      <ol className="list-decimal list-inside">
        {plan.steps.map((step, idx) => (
          <li key={idx}>
            {step.split(topic).map((part, index) => (
              index === 0 ? part : <>
                <em key={index}>{topic}</em>{part && /[.,!?;]$/.test(part) ? part : ''}
              </>
            ))}
          </li>
        ))}
      </ol>
    </div>
  )}
  </>)

}

export default LessonApp;