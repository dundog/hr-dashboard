import "./globals.css";
import { Sidebar } from "./components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body>
        <div className="flex">
          <Sidebar />
          <div className="flex-1 bg-gray-100">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
