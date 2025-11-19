import "../styles/theme.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MobileBottomNav from "../components/MobileBottonNav";

export const metadata = {
  title: "Rajni Indian Cuisine",
  description: "Authentic Indian flavors in Madison, Wisconsin",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        
        <Footer />
      </body>
    </html>
  );
}
