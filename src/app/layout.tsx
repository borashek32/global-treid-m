import { Header } from "@/shared/components/navigation/header/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/shared/components/navigation/footer/Footer";
import '@/shared/assets/styles/global.css';
import { StoreProvider } from "@/shared/providers/store-provider/ui/StoreProvider";
import { CallSupport } from "@/shared/components/call-support/CallSupport";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Global Treid-M",
  description: "Selling autoparts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <CallSupport />
          <div className='wrapper'>
            <header className='header'>
              <Header />
            </header>
            <main>
              {children}
            </main>
            <footer>
              <Footer />
            </footer>
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
