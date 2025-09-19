import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      
      <Head>
        <meta
          name="description"
          content="Inicia sesión en EcoStyle, tu e-commerce ecoamigable."
        />
      </Head>

      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

//Sirve para darle buenas practicas de página web
//Archivo de configuración pero puedo agregar toda la info de mi página web.