import ContactMe from "./ContactMe/page";
import Footer from "./Footer/page";
import Header from "./Header/page";
import Hero from "./Hero/page";
import Partners from "./Partners/page";
import Projects from "./Projects/page";
import Teams from "./Teams/page";
import Technologies from "./Technologies/page";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Partners />
      <section id="tech-stack">
      <Technologies />
      </section>
      <section id="projects">
      <Projects />
      </section>
      <section id="testimonials">
      <Teams />
      </section>
      <section id="contact">
      <ContactMe />
      </section>
      <Footer />
    </div>
  );
}
