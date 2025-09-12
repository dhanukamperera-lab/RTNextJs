import "./styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ranas Tech Technical Services",
  description: "From concept to creation – transforming your home in Dubai. AC, MEP, fit-out, painting, carpentry, flooring, cleaning, and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}


