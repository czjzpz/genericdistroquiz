'use client';

// imported modules
import useState from 'react-usestateref'
import distros from './distros.json'
import { useRouter } from 'next/navigation'

// quiz page
export default function Quiz() {

  const router = useRouter();
  let fitDistros;

  // UI Module for question
  function QuestionBlock(props) {

    return (
  
      <div className="m-5 h-1/2 w-3/4 bg-neutral-200 rounded-lg border-[1px] border-neutral-300 flex justify-center items-center">
        <div className="text-xl md:text-3xl font-bold text-center">
          {props.question}
        </div>
      </div>
  
    );
  
  }
  
  // UI Yes Button
  function YesBlock(props) {
  
    return (
      
      // after clicked triggers nextQuestion with yest
      <button onClick={() => nextQuestion(true, props.value)} className="m-1 h-full w-3/4 bg-blue-400 hover:bg-blue-500 rounded-lg border-[1px] border-blue-500 hover:border-blue-600 flex justify-center items-center">
        <div className="text-lg text-neutral-800">
          {props.text}
        </div>
      </button>
  
    );
  
  }
  
  // UI No Button
  function NoBlock(props) {
  
    return (
      
      // after clicked triggers nextQuestion with no
      <button onClick={() => nextQuestion(false, props.value)} className="m-1 h-full w-3/4 bg-blue-400 hover:bg-blue-500 rounded-lg border-[1px] border-blue-500 hover:border-blue-600 flex justify-center items-center">
        <div className="text-lg text-neutral-800">
        {props.text}
        </div>
      </button>
  
    );
  
  }
  

  // functions for getting distros
  function getDistros() {

    // sets the array
    let countSimilar = [];

    // for every distro, add the answers to the countSimilar array
    for (let i = 0; i < distros.length; i++) {

      let chosen = distros[i];
      let answers = AnswersRef.current;
      answers[0] = chosen[0];
      let added = 0;
      console.log(chosen);
      console.log(answers);

      // for every distro, get the amount of similar answers
      for (let i = 0; i < Object.keys(chosen).length; i++) {
        
        if (chosen[i] == answers[i]) {

          added++;
          console.log(added);
          console.log(chosen[i]);
          console.log(answers[i]);

        } 

      }

      // add the distro to the countSimilar object
      countSimilar[i] = {name: chosen[0], count: added};
    }

    // send the data to local storage
    const distroSelect = countSimilar.sort((a, b) => a.count - b.count);
    localStorage.setItem("distro", distroSelect[10].name);
    localStorage.setItem("distro1", distroSelect[9].name);
    localStorage.setItem("distro2", distroSelect[8].name);
    localStorage.setItem("answers", JSON.stringify(AnswersRef.current));

  }
    
    // sets up next question
    function nextQuestion(cond, value) {
      
      // continuously adds new questions until final one where it getDistros()s and goes to results
      if (IRef.current < 7) {

        SetAnswers({...answers, [value]: cond});
        SetI(i + 1);

      } else if (IRef.current == 7) {

        SetAnswers({...answers, [questions[i].value]: cond});
        getDistros();
        router.push('/results/');
      } 


    }

    // set loops and answers
    const [i, SetI, IRef] = useState(0);
    const [answers, SetAnswers, AnswersRef] = useState({});

    // questions
    const questions = [
      {
        "question": "Does the distro need to offer extensive customization options?",
        "yes": "Yes",
        "no": "No",
        "value": "1"
      },
      {
        "question": "Is long-term support (LTS) a crucial factor for your intended usage?",
        "yes": "Yes",
        "no": "No",
        "value": "2"
      },
      {
        "question": "Do you prefer a rolling release model for continuous software updates?",
        "yes": "Yes",
        "no": "No",
        "value": "3"
      },
      {
        "question": "Are you seeking a distro that prioritizes security and privacy features?",
        "yes": "Yes",
        "no": "No",
        "value": "4"
      },
      {
        "question": "Do you require specific software or development tools to be pre-installed?",
        "yes": "Yes",
        "no": "No",
        "value": "5"
      },
      {
        "question": "Do you require the distro to be 'libre'?",
        "yes": "Yes",
        "no": "No",
        "value": "6"
      },
      {
        "question": "Would you like a distro based on Debian?",
        "yes": "Yes",
        "no": "No",
        "value": "7"
      },
      {
        "question": "Does the distro need to be easy to use?",
        "yes": "Yes",
        "no": "No",
        "value": "8"
      }
    ];

    // main ui
    return (
      <div className="flex flex-col justify-center items-center h-full w-full"> 
        <QuestionBlock question={questions[i].question}/>
        <div className="h-10 w-3/4 flex ">
          <YesBlock text={questions[i].yes} value={questions[i].value}/>
          <NoBlock text={questions[i].no} value={questions[i].value}/>
        </div>
      </div>
      
    );
  }
  