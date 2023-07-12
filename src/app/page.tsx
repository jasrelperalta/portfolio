import Link from 'next/link';

export default function Home() {
  return (
    <main>    
      <title>Jasrel Peralta</title>
      <div className="flex h-screen">
        <div className="m-auto">
          <div className="flex flex-col items-center">
            <div className="text-8xl font-bold">The name is Jasrel.</div>
          </div>
          <div className="flex flex-row justify-center text-xl">
            <Link href="/about" className="m-2 p-4 bg-gray-200 rounded-lg">About</Link>
            <Link href="/projects" className="m-2 p-4 bg-gray-200 rounded-lg">Projects</Link>
            <Link href="/contact" className="m-2 p-4 bg-gray-200 rounded-lg">Contact</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
