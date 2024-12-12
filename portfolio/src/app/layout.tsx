import Footer from "./components/footer/page";
import Header from "./components/header/page";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-gray-900">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
