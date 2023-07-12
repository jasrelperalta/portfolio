'use client'

import Link from 'next/link';
import { MailFilled, GithubFilled, LinkedinFilled } from '@ant-design/icons';

export default function Contact() {
    return (
    <main>
        <title>About</title>
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="text-8xl font-bold">Contacts</div>
            <div className="flex flex-row justify-center p-8">
                <div className="text-2xl">
                    <Link className="m-3 p-3 bg-gray-200 rounded-lg" href="mailto:jtperalta1@up.edu.ph">
                        <MailFilled />
                    </Link>
                </div>
                <div className="text-2xl">
                    <Link className="m-3 p-3 bg-gray-200 rounded-lg" href="https://www.linkedin.com/in/jasrelperalta/">
                        <LinkedinFilled />
                    </Link>
                </div>
                <div className="text-2xl">
                    <Link className="m-3 p-3 bg-gray-200 rounded-lg" href="https://www.github.com/jasrelperalta">
                        <GithubFilled />
                    </Link>
                </div>
            </div>
            <Link className="text-xl m-3 p-4 bg-gray-200 rounded-lg" href="/">Return</Link>
        </div>
    </main>
    )
  }
  