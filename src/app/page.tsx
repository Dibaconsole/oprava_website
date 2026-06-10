import Nav from '@/src/components/layout/Nav';
import Footer from '@/src/components/layout/Footer';
import GuideProvider from '@/src/components/layout/GuideProvider';
import ChatProvider from '@/src/components/layout/ChatProvider';
import Hero from '@/src/components/sections/Hero';
import TrustStrip from '@/src/components/sections/TrustStrip';
import Credibility from '@/src/components/sections/Credibility';
import Problem from '@/src/components/sections/Problem';
import WhyNow from '@/src/components/sections/WhyNow';
import Solution from '@/src/components/sections/Solution';
import Product from '@/src/components/sections/Product';
import Ontology from '@/src/components/sections/Ontology';
import UseCases from '@/src/components/sections/UseCases';
import Comparison from '@/src/components/sections/Comparison';
import PE from '@/src/components/sections/PE';
import CredStrip from '@/src/components/sections/CredStrip';
import HowWorks from '@/src/components/sections/HowWorks';
import Pilot from '@/src/components/sections/Pilot';
import CTA from '@/src/components/sections/CTA';

export default function Home() {
  return (
    <GuideProvider>
      <ChatProvider>
        <>
          <Nav />
          <main>
            <Hero />
          <TrustStrip />
          <Credibility />
          <Problem />
          <WhyNow />
          <Solution />
          <Product />
          <Ontology />
          <UseCases />
          <Comparison />
          <PE />
          <CredStrip />
          <HowWorks />
          <Pilot />
          <CTA />
        </main>
        <Footer />
      </> 
      </ChatProvider>
    </GuideProvider>
  );
}
