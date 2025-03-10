import Head from 'next/head';
import Container from '../components/Container';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Experience from '../components/Experience';

export default function Home() {
  return (
    <div className="bg-primary relative min-h-screen bg-primary-light font-jakarta selection:bg-js-yellow selection:text-primary-light dark:bg-primary-dark">
      <Head>
        <title>Vishal Ranjan</title>
      </Head>

      <Container>
        <Header />
        <main>
          <About />
          <Skills />
          {/* <Projects /> */}
          <Experience />
          <Contact />
        </main>
      </Container>
    </div>
  );
}


