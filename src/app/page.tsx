import Link from 'next/link';

export default function Home() {
  return (
    <main>    
      <title>Jasrel Peralta</title>
      <div className="flex h-screen">
        <div className="m-auto">
          <div className="flex flex-col items-center">
            <div className="text-4xl p-4 text-center sm:text-8xl font-bold">The name is Jasrel.</div>
          </div>
          <div className="flex flex-col items-center text-sm justify-center sm:flex-row sm:text-xl">
            <Link href="/about" className="transition ease-in-out duration-250 m-2 p-4 sm:p-8 rounded-lg ring-1 ring-black  hover:bg-black hover:text-white hover:scale-110">About</Link>
            <Link href="/projects" className="transition ease-in-out duration-250 m-2 p-4 sm:p-8 rounded-lg ring-1 ring-black  hover:bg-black hover:text-white hover:scale-110">Projects</Link>
            <Link href="/contact" className="transition ease-in-out duration-250 m-2 p-4 sm:p-8 rounded-lg ring-1 ring-black  hover:bg-black hover:text-white hover:scale-110">Contact</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
