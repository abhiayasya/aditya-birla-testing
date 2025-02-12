import Footer from "@/components/Footer/Footer";
import "./globals.css";
import Header from "@/components/Header";
import Button from "@/components/CTA/Button";

export const metadata = {
  title: "Aditya Birla Capital",
  description: "Aditya Birla Capital is a leading financial services provider offering a wide range of products and services, including asset management, life insurance, and wealth management, with a focus on delivering customer-centric financial solutions.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-anek">
        <Header />
        {children}
        <Footer/>
        <Button title={"Start Learning Today"} className={" !mb-0 z-50"} buttonType={"bottomButton"} />
      </body>
    </html>
  );
}
