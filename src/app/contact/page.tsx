'use client'

import Link from 'next/link';
import { MailFilled, GithubFilled, LinkedinFilled, FontSizeOutlined } from '@ant-design/icons';

export default function Contact() {
    return (
    <main>
        <title>Contact</title>
        <div className="flex h-screen">
            <div className="m-auto">
                <div className="flex flex-col items-center">
                    <div className="page-title">Contacts</div>
                    <div className="flex flex-row items-center py-8 sm:py-20">
                    <div className="page-content">
                        <Link className="button-link" href="mailto:jtperalta1@up.edu.ph">
                            <MailFilled />
                        </Link>
                    </div>
                    <div className="page-content">
                        <Link className="button-link" href="https://www.linkedin.com/in/jasrelperalta/">
                            <LinkedinFilled />
                        </Link>
                    </div>
                    <div className="page-content">
                        <Link className="button-link" href="https://www.github.com/jasrelperalta">
                            <GithubFilled />
                        </Link>
                    </div>
                    </div>
                    <Link className="button" href="/">Return</Link>
                </div>
            </div>
        </div>
    </main>
    )
  }
  