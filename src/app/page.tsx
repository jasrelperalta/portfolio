import Link from 'next/link';

export default function Home() {
  return (
    <main>    
      <title>Jasrel Peralta</title>
      <div className="flex h-screen">
        <div className="m-auto group">
          <div className="flex flex-col items-center page-content ">
            <div className="page-title">
              <div id="home-name" className="animate-pulse group-hover:scale-150 sm:group-hover:scale-110">
                Jasrel Peralta
              </div>
            </div>
            <div className="page-subtitle">Software Developer
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
            </div>
          </div>
          <div className="flex flex-col items-center text-sm justify-center sm:flex-row sm:text-xl">
            <Link href="/about" className="button">About</Link>
            <Link href="/projects" className="button">Projects</Link>
            <Link href="/contact" className="button">Contact</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
