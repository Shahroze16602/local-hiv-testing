import { Main } from "@/components/Main";
import StatesList from "@/components/StatesList";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Main />
      <StatesList testName="std" />
      <Footer />
    </div>
  );
}
