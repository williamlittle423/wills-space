import './globals.css';
import { VT323 } from 'next/font/google';

const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
});

export const metadata = {
  title: 'WILL\'S SPACE',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={vt323.className}>
        {children}
      </body>
    </html>
  );
}
