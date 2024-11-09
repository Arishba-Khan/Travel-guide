import Image from "next/image";
import Hero from "./component/hero";
import Contact from "./component/contact";
import View from "./component/view";
import Reason from "./component/reason";

export default function Home() {
  return (
    <div>
      <Hero />
      <Reason />
      <View />
      <Contact />
    </div>
  );
}
