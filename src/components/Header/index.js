'use client';
import assetPath from '@/lib/assetPath';
import Link from 'next/link';
import Image from 'next/image';
import Config from '@config';
import { usePathname } from 'next/navigation';
import styles from './style.module.css';
export default function Header() {
  const path = usePathname();
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo} aria-label="Malachi Holland home">
        <span className={styles.mark}>
          {Config.portrait ? (
            <Image
              src={assetPath(Config.portrait)}
              width={42}
              height={42}
              alt="Malachi Holland"
              className={styles.profileImage}
            />
          ) : (
            'MH'
          )}
        </span>
        <span>Malachi Holland</span>
      </Link>
      <nav aria-label="Main navigation">
        <Link
          className={styles.work}
          href="/portfolio"
          aria-current={
            path.startsWith('/portfolio') ||
            path.startsWith('/roblox') ||
            path.startsWith('/project')
              ? 'page'
              : undefined
          }
        >
          Work
        </Link>
        <Link
          className={styles.contact}
          href="/contact"
          aria-current={path === '/contact' ? 'page' : undefined}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
