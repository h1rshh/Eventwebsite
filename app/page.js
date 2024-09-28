import Hero from '@/components/Hero';
import Header from '../components/Header';  // Use capital 'H' for Header
import Mainbody from '@/components/Mainbody';
import Aboutsec from '@/components/Aboutsec';
import Tickets from '@/components/Tickets';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Mainbody />
      <Aboutsec />
      <Tickets />
      <Footer />
    </>
  );
}
