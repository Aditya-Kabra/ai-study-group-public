import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'AI Study Group, Pune',
  description: 'A free, hands-on AI study group that meets almost every weekend in Pune.',
  openGraph: {
    title: 'AI Study Group, Pune',
    description: 'A free, hands-on AI study group that meets almost every weekend in Pune.',
    images: ['https://ai-study-group-pune.aditya-12345678.chatgpt.site/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Study Group, Pune',
    description: 'A free, hands-on AI study group that meets almost every weekend in Pune.',
    images: ['https://ai-study-group-pune.aditya-12345678.chatgpt.site/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
