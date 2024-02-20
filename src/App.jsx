
import Header from "../src/components/Header";
import NavBar from "../src/components/NavBar";
import { IoMdVideocam } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import Footer from "../src/components/Footer";
import Hero from "../src/components/Hero";
import SimpleSlider from "../src/components/SimpleSlider"
const App = () => {
  return (
    <div
      className=" flex flex-col
    min-h-screen bg-black text-white "
    >
      <NavBar />
      <div className="grow">
        <Header
          header="LATEST VIDEOS"
          icon={IoMdVideocam}
          text="Slide to watch more. Click on the video and enjoy the fullest."
        />
      <SimpleSlider/>
        <div className=" py-2 ">
        <Header
          header="OUR ACTORS"
          icon={FaUser}
          text="Click on their image to watch them do the unspeakable."
        />
        </div>
         <Hero/>
      </div>
      <Footer />
    </div>
  );
};

export default App;
