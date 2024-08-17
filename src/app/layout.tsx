'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import "./globals.css";
import NavBar from "@/components/navBar";
import theme from './theme';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="flex flex-col min-h-screen bg-secondary">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavBar />
          <main className="flex items-center justify-center w-full h-full grow" >
            <div className='max-w-7xl align-center self-center justify-center flex'>
              {children}
            </div>

          </main>
          <footer className="bg-terciary text-center text-sm text-primary">
            &copy; {new Date().getFullYear()} Meu Perfil
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}