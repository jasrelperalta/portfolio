import Link from 'next/link';

export default function About() {
    return (
    <main>
        <title>About</title>
        <div className="flex h-screen">
            <div className="m-auto">
                <div className="flex flex-col items-center text-center">
                    <div className="page-title">About</div>
                    <div className="page-content">
                        <div>
                            I am a Senior BS Computer Science student at the University of the Philippines Los Baños. <br />
                            I am interested in the fields of Machine Learning, Image Processing and Cybersecurity. <br />
                            I have experience in developing different kinds of applications such as web, mobile, and desktop applications. <br />
                            I have experience with using multiple programming languages, but I consider myself to be adept with C and Python. <br />
                        </div>
                    </div>
                    <Link className="button" href="/">Return</Link>
                </div>
            </div>
        </div>
    </main>
    )
  }
  