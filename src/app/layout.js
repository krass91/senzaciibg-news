import "./globals.css";
export const metadata = { title: "CyberNinjas News", description: "AI новини на български" };
export default function RootLayout({ children }) {
  return (
    <html lang="bg">
      <body className="min-h-screen bg-[#0a0a0a] text-gray-200">{children}</body>
    </html>
  );
}