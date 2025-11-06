import "./globals.css";
import Navbar from "../components/Navbar";


export const metadata = {
  title: {
    default: "My App",
    template: "%s | My App"
  },
  description: "My app description"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 text-gray-800">
        {children}
      </body>
    </html>
  );
}
