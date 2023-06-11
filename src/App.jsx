import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
         {/*  <Feedbacks /> */}
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
            <div>
              <p className="text-center text-white-100 text-[16px] pl-1 tracking-wider mb-5 py-5 mt-[4rem]">
                © 2023 Wave Software Company. Todos os direitos reservados.
              </p>
            </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
