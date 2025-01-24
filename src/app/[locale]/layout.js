
import { Inter } from 'next/font/google'
import "../globals.css";




import { getMessages } from 'next-intl/server';
import {NextIntlClientProvider} from "next-intl"
import Navbar from "../../components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  title: " FUNERAL",
  description: " TENTCHOU NGUEGNANG ANNE",
};



export default async function RootLayout  ({ children, params }) {
   const {locale} = await params;
  
  const messages = await getMessages();
  // if(!locale || !messages[locale]) notFound();
  

  return (
    
    <html lang={locale} className="!scroll-smooth" >
      <body
        className={`   ${inter.variable} antialiased`}
        // className="font-[Montserrat]"
      >
      <NextIntlClientProvider timeZone="Europe/Vienna"  locale={locale} messages={messages} >
        <Navbar/>
        {children}
        <Footer/>
      </NextIntlClientProvider>
      </body>
    </html>
  );
}
