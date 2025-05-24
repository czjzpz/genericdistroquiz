// import used modules
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
    
        <div className="bg-card-bg rounded-2xl border border-subtle-border p-6 md:p-8 m-6 md:m-8 shadow-none h-auto w-3/4 flex justify-center items-center">
          <div className="text-xl md:text-3xl font-bold text-text-main text-center">
            {props.question}
          </div>
        </div>
    
      );
    
    }
    
    // UI Yes Button
    function YesBlock(props) {
    
      return (
        
        // after clicked triggers nextQuestion with yest
        <button onClick={() => nextQuestion(true, props.value)} className="rounded-full py-2 px-6 md:py-3 md:px-8 m-1 text-lg font-bold shadow-none bg-accent-orange hover:bg-accent-orange-hover text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-orange flex justify-center items-center">
          {props.text}
        </button>
    
      );
    
    }
    
    // UI No Button
    function NoBlock(props) {
    
      return (
        
        // after clicked triggers nextQuestion with no
        <button onClick={() => nextQuestion(false, props.value)} className="rounded-full py-2 px-6 md:py-3 md:px-8 m-1 text-lg font-bold shadow-none bg-neutral-400 hover:bg-neutral-500 text-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 flex justify-center items-center">
          {props.text}
        </button>
    
      );
    
    }
    
  
    // functions for getting distros
    function getDistros() {
  
      // sets the array
      let countSimilar = [];
      const userAnswers = AnswersRef.current;
      const questionKeys = ["customization", "lts", "rollingRelease", "securityPrivacy", "preinstalledTools", "libre", "debianBased", "easyToUse"];
  
      // for every distro, add the answers to the countSimilar array
      for (let i = 0; i < distros.length; i++) {
        let chosen = distros[i];
        let added = 0;
  
        // for every distro, get the amount of similar answers
        for (const key of questionKeys) {
          if (chosen.hasOwnProperty(key) && userAnswers.hasOwnProperty(key)) {
            if (chosen[key] === userAnswers[key]) {
              added++;
            }
          }
        }
  
        // add the distro to the countSimilar object
        countSimilar[i] = {name: chosen.name, count: added};
      }
  
      // send the data to local storage
      const distroSelect = countSimilar.sort((a, b) => b.count - a.count); // Sort descending
      
      localStorage.setItem("distro", distroSelect.length > 0 ? distroSelect[0].name : "");
      localStorage.setItem("distro1", distroSelect.length > 1 ? distroSelect[1].name : "");
      localStorage.setItem("distro2", distroSelect.length > 2 ? distroSelect[2].name : "");
      localStorage.setItem("answers", JSON.stringify(userAnswers));
  
    }
      
      // sets up next question
      function nextQuestion(cond, value) {
        
        // continuously adds new questions until final one where it getDistros()s and goes to results
        if (IRef.current < 12) { // 13 questions total, so index goes from 0 to 12
  
          SetAnswers({...answers, [value]: cond});
          SetI(i + 1);
  
        } else if (IRef.current == 12) { // Last question
  
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
          "question": "does the distro need to offer extensive customization options?",
          "yes": "yes",
          "no": "no",
          "value": "customization"
        },
        {
          "question": "is long-term support (lts) a crucial factor for your intended usage?",
          "yes": "yes",
          "no": "no",
          "value": "lts"
        },
        {
          "question": "do you prefer a rolling release model for continuous software updates?",
          "yes": "yes",
          "no": "no",
          "value": "rollingRelease"
        },
        {
          "question": "are you seeking a distro that prioritizes security and privacy features?",
          "yes": "yes",
          "no": "no",
          "value": "securityPrivacy"
        },
        {
          "question": "do you require specific software or development tools to be pre-installed?",
          "yes": "yes",
          "no": "no",
          "value": "preinstalledTools"
        },
        {
          "question": "do you require the distro to be 'libre'?",
          "yes": "yes",
          "no": "no",
          "value": "libre"
        },
        {
          "question": "would you like a distro based on debian?",
          "yes": "yes",
          "no": "no",
          "value": "debianBased"
        },
        {
          "question": "does the distro need to be easy to use?",
          "yes": "yes",
          "no": "no",
          "value": "easyToUse"
        },
        {
          "question": "will gaming be a primary use for this computer?",
          "yes": "yes",
          "no": "no",
          "value": "isForGaming"
        },
        {
          "question": "will software development be a primary use?",
          "yes": "yes",
          "no": "no",
          "value": "isForDevelopment"
        },
        {
          "question": "will creative tasks like video/photo editing or graphic design be a primary use?",
          "yes": "yes",
          "no": "no",
          "value": "isForCreativeWork"
        },
        {
          "question": "do you prefer a modern-looking desktop with all the latest features?",
          "yes": "yes",
          "no": "no",
          "value": "prefersModernDE"
        },
        {
          "question": "do you prefer a simpler, faster desktop that uses fewer resources?",
          "yes": "yes",
          "no": "no",
          "value": "prefersLightweightDE"
        }
      ];
  
      // main ui
      return (
        <div className="flex flex-col justify-center items-center h-full w-full p-4"> {/* bg-soft-bg is inherited from body */}
          <QuestionBlock question={questions[i].question}/>
          <div className="w-3/4 flex flex-col md:flex-row justify-around items-center mt-6 md:mt-8 space-y-4 md:space-y-0 md:space-x-4">
            <YesBlock text={questions[i].yes} value={questions[i].value}/>
            <NoBlock text={questions[i].no} value={questions[i].value}/>
          </div>
        </div>
        
      );
    }