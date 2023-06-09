import { Container } from '@components/Container';
import { GithubIcon } from '@components/icons/github';
import { Logo } from '@components/icons/logo';
import { SlackIcon } from '@components/icons/slack';
import { TwitterIcon } from '@components/icons/twitter';
import { FooterLinks } from '@lib/data';
import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className="mt-12 border-t border-gray-100 py-[5.6rem] text-md">
            <Container className="flex flex-col justify-between lg:flex-row">
                <div>
                    <div className="flex flex-row justify-between h-full lg:flex-col">
                        <div className="flex items-center text-gray-300">
                            <Logo className="w-4 h-4 mr-4" /> Linear - Designed worldwide
                        </div>
                        <div className="flex mt-auto space-x-4 text-gray-300">
                            <TwitterIcon />
                            <GithubIcon />
                            <SlackIcon />
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    {FooterLinks.map((column) => (
                        <div key={column.title} className="mt-10 min-w[50%] lg:mt:0 lg:min-w-[18rem]">
                            <h3 className="mb-3 font-medium">{column.title}</h3>
                            <ul>
                                {column.links.map((link) => (
                                    <li key={link.label} className="[&_a]:last:mb-0">
                                        <Link href={link.href} className="block mb-3 text-gray-300 transition-colors hover:text-white">
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
