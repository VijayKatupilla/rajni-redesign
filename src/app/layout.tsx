import "../styles/theme.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { LocationProvider } from "../context/LocationContext";

export const metadata = {
  title: "Rajni Indian Cuisine",
  description: "Authentic Indian flavors in Madison, Wisconsin",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LocationProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LocationProvider>
      </body>
    </html>
  );
}
