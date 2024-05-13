import Camp from "@/Components/Camp";
import Features from "@/Components/Features";
import GetApp from "@/Components/GetApp";
import Guide from "@/Components/Guide";
import Hero from "@/Components/Hero";
import ScrollToTopButton from "@/Components/ScrollToTopButton";

export default function Home() {
  return (
    <>
    <ScrollToTopButton/>
    <Hero/>
    <Camp/>
    <Guide/>
    <Features/>
    <GetApp/>
    </>
  );
}
