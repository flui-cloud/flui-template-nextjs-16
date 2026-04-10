import './globals.css';

export const metadata = {
  title: 'Flui Demo — Next.js 16',
  description: 'Demo application deployed via Flui',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
