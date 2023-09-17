import ReactQueryProvider from "@/utils/providers/react-query";
import RecoilProvider from "@/utils/providers/recoil";
import { Open_Sans } from "next/font/google";
import "./global.css";

export const metadata = {
  title: "Credit Scoring Admin",
  description: "Credit Scoring Admin",
  link: [
    {
      rel: "preload",
      href: "/global.css",
      as: "style",
    },
  ],
};

const openSans = Open_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <ReactQueryProvider>
          <RecoilProvider>{children}</RecoilProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
