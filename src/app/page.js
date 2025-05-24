
import Link from 'next/link';

function Button(props) {

  return (

    <button onClick={() => this.function} className="h-10 w-20 bg-neutral-200 rounded-lg border-[1px] border-neutral-300 hover:bg-neutral-300 hover:border-neutral-400">{this.text}</button>

  );

}

function CustomLink(props) {

  return (

    <Link href={props.link} className="py-3 px-8 bg-accent-orange hover:bg-accent-orange-hover text-white font-bold rounded-full shadow-none text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-orange flex justify-center items-center">{props.text}</Link>

  );

}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-full w-full p-4 md:p-6"> {/* bg-soft-bg is inherited from body */}
      <div className="bg-card-bg rounded-2xl border border-subtle-border p-6 md:p-8 my-6 md:my-8 text-center shadow-none">
        <h1 className="text-2xl md:text-3xl font-bold text-text-main mb-6">
          welcome to the generic distro quiz!
        </h1>
        <p className="text-text-main mb-8">
          not sure which linux distribution is right for you? take this short quiz to find a recommendation.
        </p>
        <CustomLink text="start quiz" link={"/quiz"}/>
      </div>
      <div className="text-xs text-neutral-500 mt-8">
        version 0.0.1
      </div>
    </main>
    
  );
}
