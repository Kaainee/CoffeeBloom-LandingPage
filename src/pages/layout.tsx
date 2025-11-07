import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import AppNavbar from "@/components/NavBar";
import { Container } from "react-bootstrap";
import Footer from "@/components/Footer";

export const metadata = {
  title: "CoffeeBloom",
  description: "Landing Page CoffeeBloom",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="d-flex flex-column min-vh-100">
        <AppNavbar />
        <main className="flex-grow-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
