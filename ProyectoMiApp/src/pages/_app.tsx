import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";


// Import Montserrat from Google Fonts
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // puedes agregar más si los necesitas
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={montserrat.className}>
      <Component {...pageProps} />
    </main>
  );
}


//Propia de next =>index ..punto de entrada como el index html