import Link from 'next/link';

export default function About() {
    return (
    <main>
        <title>About</title>
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="text-8xl font-bold">About</div>
            <div className="text-2xl">I am Jasrel Roby Peralta.</div>
            <div className="text-2xl">I am a Software Developer.</div>
            <div className="text-2xl">I am interested in the field of Machine Learning and Image Processing.</div>
            <div className="text-2xl">I am currently improving my skills in the field of Web Development.</div>
            <Link className="text-xl m-2 p-2 bg-gray-200 rounded-lg" href="/">Return</Link>
        </div>
    </main>
    )
  }
  