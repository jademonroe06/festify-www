/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/screens/**/*.{js,ts,jsx,tsx,mdx}", // ⬅️ añade esta línea //para las carpetas
    ],
    theme: { extend: {} },
    plugins: [],
};

//Enrutador: para conectar las páginas y componentes de la aplicación.