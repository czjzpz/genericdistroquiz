
import Link from 'next/link';

function Button(props) {

  return (

    <button onClick={() => this.function} className="h-10 w-20 bg-neutral-200 rounded-lg border-[1px] border-neutral-300 hover:bg-neutral-300 hover:border-neutral-400">{this.text}</button>

  );

}

function CustomLink(props) {

  return (

    <Link href={props.link} className="px-6 py-2 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 flex justify-center items-center">{props.text}</Link>

  );

}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-full w-full p-4 md:p-6">
      <div className="bg-slate-100 rounded-xl shadow-lg p-6 md:p-8 my-6 md:my-8 text-center">
        <h1 className="font-heading text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
          Welcome to the Generic Distro Quiz!
        </h1>
        <p className="text-gray-600 mb-8">
          Not sure which Linux distribution is right for you? Take this short quiz to find a recommendation.
        </p>
        <CustomLink text="Start Quiz" link={"/quiz"}/>
      </div>
      <div className="text-xs text-gray-400 mt-8">
        version 0.0.1
      </div>
    </main>
    
  );
}
