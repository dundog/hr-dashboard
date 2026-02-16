import "./globals.css";
import Sidebar from "./components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
     <body className="animated-bg relative overflow-hidden">
  {/* Glow Effects */}
  <div className="glow-blob top-[-100px] left-[-100px]"></div>
  <div className="glow-blob bottom-[-120px] right-[-100px]"></div>

  <Sidebar />

  <main className="ml-64 p-10 min-h-screen relative z-10">
    {children}
  </main>
</body>
    </html>
  );
}