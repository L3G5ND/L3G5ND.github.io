'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
export default function WorkSwitcher({ software, roblox }) {
  const search = useSearchParams();
  const isRoblox = search.get('view') === 'roblox';
  return (
    <>
      <nav className="work-switch" aria-label="Portfolio collection">
        <Link
          href="/portfolio"
          scroll={false}
          aria-current={!isRoblox ? 'page' : undefined}
        >
          Software Development
        </Link>
        <Link
          href="/portfolio?view=roblox"
          scroll={false}
          aria-current={isRoblox ? 'page' : undefined}
        >
          Roblox Portfolio
        </Link>
      </nav>
      <div className="work-panel" key={isRoblox ? 'roblox' : 'software'}>
        {isRoblox ? roblox : software}
      </div>
    </>
  );
}
