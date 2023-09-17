import "./global.css";
import { Provider } from "../context/provider";
export const metadata = {
  title: "Credit Scoring",
  description: "Credit Scoring USER",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
