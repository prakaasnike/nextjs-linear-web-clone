import { Container } from '@components/Container';
import { GithubIcon } from '@components/icons/github';
import { Logo } from '@components/icons/logo';
import { SlackIcon } from '@components/icons/slack';
import { TwitterIcon } from '@components/icons/twitter';
import { FooterLinks } from '@lib/data';
import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className="mt-12 border-t border-white-200 py-[5.6rem] text-sm">
            <Container className="flex justify-between">
                <div>
                    <div className="flex flex-col h-full">
                        <div className="flex items-center text-gray-100">
                            <Logo className="w-4 h-4 mr-4" /> Linear - Designed worldwide
                        </div>
                        <div className="flex mt-auto space-x-4 text-gray-100">
                            <TwitterIcon />
                            <GithubIcon />
                            <SlackIcon />
                        </div>
                    </div>
                </div>
                <div className="flex">
                    {FooterLinks.map((column) => (
                        <div key={column.title} className="min-w-[18rem]">
                            <h3 className="mb-3 font-medium">{column.title}</h3>
                            <ul>
                                {column.links.map((link) => (
                                    <li key={link.label} className="[&_a]:last:mb-0">
                                        <Link href={link.href} className="block mb-3 text-gray-100">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Container>
        </footer>
    );
};
