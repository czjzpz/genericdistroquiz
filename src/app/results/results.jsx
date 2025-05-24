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
    
        <Link href={"/quiz"} className="m-6 p-3 px-8 bg-accent-orange hover:bg-accent-orange-hover text-white font-bold rounded-full shadow-none text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-orange flex justify-center items-center">
          try again
        </Link>
    
      );
    
    }
  
    // Block to get distro data
    function DistroBlock(props) {
  
      // get emoji for answer true
      function ifTrue(answer) {
  
        switch (answer) {
          case true:
            return "✅"; // green check emoji
          case false:
            return "❌"; // red x emoji
        };
  
  
      }
      // 'questions' is imported and is now an object of categories
      const categorizedQuestions = questions; 
  
      return (
    
        <div className="bg-card-bg rounded-2xl border border-subtle-border p-4 md:p-6 m-4 md:m-6 shadow-none w-full max-w-md flex flex-col items-center">
          <Link href={props.link} className="text-2xl md:text-3xl font-bold text-accent-blue-text hover:text-accent-blue mb-3 text-center block">
            {props.name}
          </Link>
          <img src={props.img} alt={`${props.name} logo`} className="w-28 h-28 md:w-36 md:h-36 mx-auto mb-4 rounded-lg border-2 border-subtle-border"/>
          <p className="text-text-main italic mb-4 text-center">
            {props.quote}
          </p>
          
          {Object.entries(categorizedQuestions).map(([category, questionsInCategory]) => (
            <div key={category} className="my-4 p-3 bg-amber-50 rounded-lg w-full">
              <h3 className="text-lg font-bold text-accent-blue-text mb-2 text-center">{category}</h3>
              {Object.entries(questionsInCategory).map(([key, label]) => (
                <div key={key} className="flex justify-between items-center text-sm mb-1">
                  <span className="text-text-main w-3/5">{label}</span>
                  <div className="flex items-center w-2/5 justify-end">
                    <span className="mr-3 text-lg">{ifTrue(props.userAnswers[key])}</span> {/* Your choice */}
                    <span className="text-lg">{ifTrue(props.choice[key])}</span> {/* Distro choice */}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
    
      );
    
    }
  
      return (
        <div className="flex flex-col items-center h-full w-full overflow-y-auto p-4 md:p-6"> {/* bg-soft-bg is inherited from body */}
          <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center items-stretch md:items-start w-full"> {/* items-stretch for equal height cards in a row */}
          {distroObject0 && <DistroBlock name={distroObject0.name} img={distroObject0.image} quote={distroObject0.quote} link={distroObject0.link} choice={distroObject0} userAnswers={answers}/>}
          {distroObject1 && <DistroBlock name={distroObject1.name} img={distroObject1.image} quote={distroObject1.quote} link={distroObject1.link} choice={distroObject1} userAnswers={answers}/>}
          {distroObject2 && <DistroBlock name={distroObject2.name} img={distroObject2.image} quote={distroObject2.quote} link={distroObject2.link} choice={distroObject2} userAnswers={answers}/>}
          </div>
          <div className="flex justify-center items-center mt-6 mb-6">
            <AgainBlock/>
          </div>
        </div>
        
      );
    }