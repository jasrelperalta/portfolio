import Link from 'next/link';

export default function Home() {
  return (
    <main>    
      <title>Jasrel Peralta</title>
      <div className="flex h-screen">
        <div className="m-auto">
          <div className="flex flex-col items-center page-content">
            <div className="page-title transition ease-in-out duration-100 hover:-translate-y-2 hover:scale-110">Jasrel Roby Peralta</div>
            <div className="page-subtitle transition transform duration-100 hover:not-italic">Software Developer</div>
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
