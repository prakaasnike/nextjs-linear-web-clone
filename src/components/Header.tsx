'use client';
import { Button } from '@components/Button';
import { Container } from '@components/Container';
import { HamburgerIcon } from '@components/icons/hamburger';
import { Logo } from '@components/icons/logo';
import { NavLinks } from '@lib/data';
import clsx from 'clsx';
import Link from 'next/link';
import { useState, useEffect } from 'react';


export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const html = document.querySelector('html');
        if (html) html.classList.toggle('overflow-hidden', isOpen);
    }, [isOpen]);

    useEffect(() => {
        const handleResize = () => setIsOpen(false);

        window.addEventListener('orientationchange', handleResize);
        window.addEventListener('resize', () => handleResize);

        return () => {
            window.removeEventListener('orientationchange', handleResize);
            window.removeEventListener('resize', handleResize);
        };
    }, [setIsOpen]);


    const handleToggle = () => setIsOpen(!isOpen);

    return (
        <header className="fixed top-0 left-0 w-full border-b border-white-200 backdrop-blur-[12px]">
            <Container className="flex h-nav-height">
                <Link href="/" className="flex items-center text-md">
                    <Logo className="mr-2 h-[1.8rem] w-[1.8rem]" /> Linear
                </Link>
                <div
                    className={clsx(
                        'transition-[visibility] md:visible',
                        isOpen ? 'visible' : 'invisible delay-500'
                    )}
                >
                    <nav className={clsx(
                        'fixed  top-nav-height left-0 h-[calc(100vh_-_var(--nav-height))] md:translate-x-0 md:transition-none w-full overflow-auto bg-black transition-opacity duration-500 md:relative md:top-0 md:block md:h-auto md:w-auto md:bg-transparent md:opacity-100  ',
                        isOpen ? 'translate-x-0 opacity-100' : 'translate-x-[-100vw] opacity-0'
                    )}
                    >
                        <ul className="flex flex-col h-full ease-in md:flex-row md:items-center">
                            {NavLinks.map((link) => (
                                <li
                                    key={link.label}
                                    className={clsx(
                                        'ml-6 border-b border-gray-200 md:border-none',
                                        link.className
                                    )}
                                >
                                    <Link
                                        href={link.href}
                                        className={clsx(
                                            'flex h-nav-height w-full -pt-4 items-center text-md transition-[color,transform] duration-300 hover:text-gray-100 md:translate-y-0 md:text-sm md:transition-colors ',
                                            isOpen && 'translate-y-0'
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className="flex items-center h-full ml-auto">
                    <Link href="/login" className="mr-6 text-sm">
                        Log in
                    </Link>
                    <Button href="/login" intent="primary">
                        Sign up
                    </Button>
                </div>

                <button onClick={handleToggle} className="ml-6 md:hidden">
                    <span className="sr-only">Toggle menu</span>
                    <HamburgerIcon />
                </button>
            </Container>
        </header>
    );
};
