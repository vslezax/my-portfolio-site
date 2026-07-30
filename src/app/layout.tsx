import "./globals.css";
import { montserrat } from "../../public/fonts";
import { Analytics } from "@vercel/analytics/next"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={montserrat.variable}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}