import Link from 'next/link';
import { Megrim } from 'next/font/google';

const megrim = Megrim({ subsets:['latin'], display: 'swap', weight: '400' });

export default function Home() {
  return (
    <main>    
      <title>Jasrel Peralta</title>
      <div className="flex h-screen">
        <div className="m-auto group">
          <div className="flex flex-col items-center page-content ">
            <div className="page-title">
              <div id="home-name" className="group-hover:animate-pulse">
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
