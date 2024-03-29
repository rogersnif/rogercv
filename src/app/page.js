import About from "./components/about";
import Footer from "./components/footer";
import Getintouch from "./components/getintouch";
import Projects from "./components/projects";
import Rate from "./components/rate";
import Section1 from "./components/section1";
import Skills from "./components/skills";

export default function Home() {
  return (
    <main className="">
      <Section1 />
      <About />
      <Projects />
      <Skills />
      <Rate />
      <Getintouch />

      <Footer />
    </main>
  );
}
