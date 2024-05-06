
import Link from 'next/link';

function Button(props) {

  return (

    <button onClick={() => this.function} className="h-10 w-20 bg-neutral-200 rounded-lg border-[1px] border-neutral-300 hover:bg-neutral-300 hover:border-neutral-400">{this.text}</button>

  );

}

function CustomLink(props) {

  return (

    <Link href={props.link} className="h-10 w-20 bg-neutral-200 rounded-lg border-[1px] border-neutral-300 hover:bg-neutral-300 hover:border-neutral-400 flex justify-center items-center">{props.text}</Link>

  );

}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div className="font-bold text-xl m-1">
      Welcome to generic distro quiz
    </div>
    <CustomLink text="play" link={"/quiz"}/>
    <div className="text-xs m-5 text-neutral-300">
      version 0.0.1
      </div>
    </div>
    
  );
}
