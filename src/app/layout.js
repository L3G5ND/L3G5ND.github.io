import Header from '@/components/Header';
import Pillars from '@/components/Pillars';
import Config from '@config';
import './globals.css';
export const metadata = {
  title: {
    default: 'Malachi Holland — Software Developer',
    template: '%s · Malachi Holland',
  },
  description:
    'Software, creative experiments, and Roblox development by Malachi Holland.',
};
export default function Layout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Pillars />
        <Header />
        <main id="main">{children}</main>
        <footer id="contacts">
          <div className="footer-intro">
            <div className="wordmark">Malachi Holland</div>
            <p>Building great things!</p>
          </div>
          <nav aria-label="All contacts" className="footer-contacts">
            {Config.socials.map((s) => (
              <a key={s.name} href={s.link} target="_blank" rel="noreferrer">
                {s.name}
              </a>
            ))}
            <a href={`mailto:${Config.email}`}>Email</a>
          </nav>
        </footer>
      </body>
    </html>
  );
}
