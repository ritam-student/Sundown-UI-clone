import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <div className="bg-[#EFEAE3] min-h-[100vh] w-full px-4 sm:px-6 md:px-8 lg:px-10">
      <NavBar />
      <Hero />
    </div>
  );
}
