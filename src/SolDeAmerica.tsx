import {
  Banner,
  ContactForm,
  Flota,
  Header,
  Nosotros,
  Servicios,
} from "./components";
import { BackToTop, WhatsAppButton } from "./components/shared";

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
      <BackToTop />
      <WhatsAppButton />
    </>
  );
};
