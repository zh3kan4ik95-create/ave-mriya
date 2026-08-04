import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { ink: '#171916', leaf: '#7ED957', mist: '#EAFBE7' }, fontFamily: { sans: ['Arial', 'Helvetica', 'sans-serif'] }, boxShadow: { soft: '0 18px 55px rgba(37, 54, 32, .08)' } } }, plugins: [] };
export default config;
