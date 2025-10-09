import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import { HeroUIProvider } from "@heroui/react";
import { Provider } from "@/context/Provider";
import { ToastContainer } from "react-toastify";
import "@/styles/globals.css";

// Import Montserrat from Google Fonts
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeroUIProvider>
        <Provider>
          <main className={montserrat.className}>
            <Component {...pageProps} />
            <ToastContainer />
          </main>
        </Provider>
      </HeroUIProvider>
    </>
  );
}

//Propia de next =>index ..punto de entrada como el index html
