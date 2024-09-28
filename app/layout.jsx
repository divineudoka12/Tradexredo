import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import "./globals.css";

export const metadata = {
  title: "Tradex",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
