// import used modules
import distros from '../quiz/distros.json';
import questions from './questions.json';
import Link from 'next/link';

export default function Results() {

    // get the names of distros from local storage
    let distroName = localStorage.getItem("distro") || "";
    let distroName1 = localStorage.getItem("distro1") || "";
    let distroName2 = localStorage.getItem("distro2") || "";
    // get the answer names from JSON file (questions.json)
    let answers = JSON.parse(localStorage.getItem("answers")) || {}; // Ensure answers is an object
    // from those distroNames, the distros are found from the distros JSON file
    let distroObject0 = distros.find((obj) => obj.name === distroName);
    let distroObject1 = distros.find((obj) => obj.name === distroName1);
    let distroObject2 = distros.find((obj) => obj.name === distroName2);
  
    // Try Again Button
    function AgainBlock(props) {
    
      return (
    
        <Link href={"/quiz"} className="m-6 p-3 px-6 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 flex justify-center items-center">
          Try Again
        </Link>
    
      );
    
    }
  
    // Block to get distro data
    function DistroBlock(props) {
  
      // get emoji for answer true
      function ifTrue(answer) {
  
        switch (answer) {
          case true:
            return "✅";
          case false:
            return "❌";
        };
  
  
      }
  
      return (
    
        <div className="m-4 md:m-6 p-6 bg-slate-100 rounded-xl shadow-lg w-full max-w-md flex flex-col items-center">
          <Link href={props.link} className="font-heading text-2xl md:text-3xl font-bold text-sky-600 hover:text-sky-700 mb-3 text-center">
            {props.name}
          </Link>
          <img src={props.img} alt={`${props.name} logo`} className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 rounded-md"/>
          <p className="text-gray-700 italic mb-4 text-center">
            {props.quote}
          </p>
          <div className="w-full bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between">
              <div className="w-1/2 pr-2">
                <h4 className="font-heading font-semibold text-gray-600 mb-2 text-center">Your Choices</h4>
                {questions.map((question, index) => (
                  <div key={index} className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600">{question}</span>
                    <span className="text-lg">
                      {props.userAnswers && ifTrue(props.userAnswers[Object.keys(props.userAnswers)[index]])}
                    </span>
                  </div>
                ))}
              </div>
              <div className="w-1/2 pl-2 border-l border-gray-300">
                <h4 className="font-heading font-semibold text-gray-600 mb-2 text-center">Distro Choices</h4>
                {questions.map((question, index) => (
                  <div key={index} className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600">{question}</span>
                    <span className="text-lg">
                      {props.choice && ifTrue(props.choice[Object.keys(props.userAnswers)[index]])}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
    
      );
    
    }
  
      return (
        <div className="flex flex-col items-center h-full w-full overflow-y-auto p-4 md:p-6"> 
          <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center items-center md:items-start w-full">
          {distroObject0 && <DistroBlock name={distroObject0.name} img={distroObject0.image} quote={distroObject0.quote} link={distroObject0.link} choice={distroObject0} userAnswers={answers}/>}
          {distroObject1 && <DistroBlock name={distroObject1.name} img={distroObject1.image} quote={distroObject1.quote} link={distroObject1.link} choice={distroObject1} userAnswers={answers}/>}
          {distroObject2 && <DistroBlock name={distroObject2.name} img={distroObject2.image} quote={distroObject2.quote} link={distroObject2.link} choice={distroObject2} userAnswers={answers}/>}
          </div>
          <div className="flex justify-center items-center mt-4">
            <AgainBlock/>
          </div>
        </div>
        
      );
    }