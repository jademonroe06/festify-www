"use client";

import "./globals.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {/* Cabecera */}
        <header className="bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg">
          <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-center">
            <h1 className="text-2xl font-bold tracking-wide">
              Festify{" "}
              <span className="font-light text-sm">
                - la aplicación que te lleva de festivales
              </span>
            </h1>
          </div>
        </header>

        {/* Contenido principal */}
        <main className="mx-auto max-w-5xl px-6 py-6">{children}</main>
      </body>
    </html>
  );
}

