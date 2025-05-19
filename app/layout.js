import "./globals.css";
import Navbar from './nav/nav'
import Home from './page'
import Main from './main/main'
import Header from './header/header'
import Feature from './features/features'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Main />
        <Navbar />
        <Header /> 
        <Feature />
        <Home />
        {children}
      </body>
    </html>
  );
}
