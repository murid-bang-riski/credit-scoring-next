import Providers from "@/utils/providers";
import { Open_Sans } from "next/font/google";
import "./global.css";

export const metadata = {
  title: "Welcome to cs-admin",
  description: "Generated by create-nx-workspace",
  link: [
    {
      rel: "preload",
      href: "/global.css",
      as: "style",
    },
  ],
};

const openSans = Open_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
