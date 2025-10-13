import "./globals.css";

export const metadata = {
  title: "Math Practice App",
  description: "Math app where anyone can practice their math skills!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
