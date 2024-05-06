'use client';

// imported modules
import distros from './distros.json';
import questions from './questions.json';
import Link from 'next/link';

export default function Results() {

  // get the names of distros from local storage
  let distroName = localStorage.getItem("distro") || "";
  let distroName1 = localStorage.getItem("distro1") || "";
  let distroName2 = localStorage.getItem("distro2") || "";
  // get the answer names from JSON file (questions.json)
  let answers = JSON.parse(localStorage.getItem("answers")) || "";
  // from those distroNames, the distros are found from the distros JSON file
  let distroChoice0 = distros.filter((obj) => obj.name == distroName);
  let distroChoice1 = distros.filter((obj) => obj.name == distroName1);
  let distroChoice2 = distros.filter((obj) => obj.name == distroName2);

  // Try Again Button
  function AgainBlock(props) {
  
    return (
  
      <Link href={"/quiz"} className="m-3 h-30 w-fit p-1 bg-blue-400 hover:bg-blue-500 rounded-lg border-[1px] border-blue-500 hover:border-blue-600 flex justify-center items-center">
        <div className="text-lg text-neutral-800">
        Try Again
        </div>
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
  
      <div className="m-3 h-full md:h-[90%] w-[90%] md:w-[60%] bg-neutral-200 rounded-lg border-[1px] border-neutral-300 flex flex-col justify-center items-center">
        <Link href={props.link} className="text-xl md:text-3xl m-5 text-center text-neutral-700 hover:text-neutral-900">
          {props.name}
        </Link>
        <div className="flex justify-center items-center">
        <img src={props.img} alt="distro logo" class="max-h-[15rem] max-w-[10rem] md:max-h-[5rem] md:max-w=[5rem] lg:max-h-[10rem] lg:max-w-[10rem]"/>
        </div>
        <p className="m-5 text-lg text-center">
          {props.quote}
        </p>
        <div className="grid grid-cols-3 grid-rows-1 p-1 w-[80%] md:w-[30%] justify-center items-center">
          <div className="row-start-1 col-start-1 mt-2 flex flex-col justify-center items-end h-full w-full">
          {/* For every question, put it out */}
          {questions.map(question => (
            <div className="text-sm text-nowrap">{question}</div>
          ))}
          </div>
          <div className="text-sm row-start-1 col-start-2 flex flex-col justify-center items-center">
          Your choices:
          <div className="flex flex-col">
          {/* For every answer, put it out */}
          {Object.values(answers).map(answer => (
            <bold>{ifTrue(answer)}</bold>
          ))}
          </div>
          </div>
          <div className="text-sm row-start-1 col-start-3 flex flex-col justify-center items-center">
          Distro choices:
          <div className="flex flex-col">
          {/* For every answer, put it out */}
          {Object.values(props.choice).map(answer => (
            <bold>{ifTrue(answer)}</bold>
          ))}
          </div>
          </div>
        </div>
      </div>
  
    );
  
  }

    return (
      <div className="flex justify-center items-center h-full w-full overflow-scroll"> 
        <div className="flex md:flex-col flex-col justify-start items-center h-full w-full">
        <DistroBlock name={distroChoice0[0].name} img={distroChoice0[0].image} quote={distroChoice0[0].quote} link={distroChoice0[0].link} choice={distroChoice0[0]}/>
        <DistroBlock name={distroChoice1[0].name} img={distroChoice1[0].image} quote={distroChoice1[0].quote} link={distroChoice1[0].link} choice={distroChoice1[0]}/>
        <DistroBlock name={distroChoice2[0].name} img={distroChoice2[0].image} quote={distroChoice2[0].quote} link={distroChoice2[0].link} choice={distroChoice2[0]}/>
        <div className="flex justify-center items-center">
          <AgainBlock/>
        </div>
        </div>
        
      </div>
      
    );
  }
  