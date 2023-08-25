import Providers from "@/utils/providers";
import "./global.css";

export const metadata = {
  title: "Welcome to cs-admin",
  description: "Generated by create-nx-workspace",
  //link preload
  links: [
    {
      rel: "preload",
      href: "/global.css",
      as: "style",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
