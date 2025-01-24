import Biographie from "@/components/homeComponent/biographie/Biographie";
import Contact from "@/components/homeComponent/contact/Contact";
import FairePart from "@/components/homeComponent/fairePart/FairePart";
import HomePage from "@/components/homeComponent/home/HomePage";
import Programme from "@/components/homeComponent/programme/Programme";


export default function Home() {
  return (
  <>
     <HomePage />
     <FairePart />
     <Biographie />
     <Programme />
     <Contact />
  </>
  );
}
