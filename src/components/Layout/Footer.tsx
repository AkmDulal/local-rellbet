/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaHome, FaCompass, FaFutbol, FaBars } from 'react-icons/fa';
import { MdOutlineCasino } from "react-icons/md";
export default function Footer() {
  const t = useTranslations('nav');
  const pathname = usePathname();
   const [mounted, setMounted] = useState(false);

  const segs = pathname.split('/').filter(Boolean);
  const current = segs[1] || ''; 

  const items = [
    { key: 'home',   href: '/home',   label: t('home'),   Icon: FaHome },
    { key: 'casino',   href: '/casino',   label: t('casino'),   Icon: MdOutlineCasino },
    { key: 'explore',href: '/explore',label: t('explore'),Icon: FaCompass },
    { key: 'sport',  href: '/sport',  label: t('sport'),  Icon: FaFutbol },
    { key: 'menu',   href: '/menu',   label: t('menu'),   Icon: FaBars },
  ];



  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <footer>
      <div className="container mx-auto max-w-6xl pt-[18px] pb-3 px-3 text-sm opacity-90">
        <nav className="flex justify-evenly items-center gap-[30px]">
          {items.map(({ key, href, label, Icon }) => {
            const active = current === key;
            return (
              <Link
                key={key}
                href={href}
                aria-current={active ? 'page' : undefined}
                className={`flex w-full max-w-24 flex-col items-center`}
              >
                <Icon size={30} className={active ? 'text-blue-500' : 'text-gray-400'} />
                <span className={`mt-1 w-full truncate text-center text-xs ${active ? 'text-blue-500' : 'text-gray-400'}`}>
                  {label}
                </span>
                {active ? (
                  <span className="mt-1 block h-1 w-full bg-blue-500 mx-auto rounded-full" />
                ) : (
                  <span className="mt-1 block h-1 w-full bg-transparent" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}
