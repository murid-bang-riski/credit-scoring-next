import "./global.css";
import { Provider } from "../context/provider";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  title: "Credit Scoring",
  description: "Credit Scoring USER",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Suspense fallback={<Loading />}>
        <body>
          <Provider>{children}</Provider>
        </body>
      </Suspense>
    </html>
  );
}
