import Link from 'next/link';

export default function Projects() {
    return (
    <main>
        <title>About</title>
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="text-8xl font-bold">Projects</div>
            <div className="text-2xl p-8">WIP</div>
            <Link className="text-xl m-2 p-2 bg-gray-200 rounded-lg" href="/">Return</Link>
        </div>
    </main>
    )
  }
  