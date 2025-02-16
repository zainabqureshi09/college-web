import { AuthProvider } from './components/AuthContext';
import Bot from './components/Bot';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './globals.css';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='bg-white'>
        <Navbar />
        <AuthProvider><main className="min-h-screen">{children}<Bot/></main></AuthProvider>
        <Footer />
      </body>
    </html>
  );
}
