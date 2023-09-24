import Description from '../Description';
import Contact from '../Contact';
import AboutMe from '../AboutMe';
import MyExperties from '../MyExpertise';
import Projects from '../Projects';

export default function Home() {
  return (
    <>
      <Description />
      <MyExperties />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  );
}
