import Navbar from "../components/navbar/Navbar";
import image from "../img/intro.png";

function Intro() {
  return (
    <div>
      <Navbar />
      <img src={image} alt="tablet" />;<h2>Hello</h2>
    </div>
  );
}
export default Intro;
