import {
  Banner,
  ContactForm,
  Flota,
  Header,
  Nosotros,
  Servicios,
} from "./components";
import { BackToTop, WhatsAppButton, Footer } from "./components/shared";

export const SolDeAmerica = () => {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Servicios />
        <Nosotros />
        <Flota />
        <ContactForm />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </>
  );
};
