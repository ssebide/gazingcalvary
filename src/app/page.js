import Image from "next/image";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Solutions from "./components/Solutions";
import Testimonial from "./components/Testimonial"
import BlogSection from "./components/BlogSection";
import BlogPosts from "./components/BlogPosts";
import TestimonyPosts from "./components/TestimonyPosts";
import Donate from "./components/Donate";
import Join from "./components/Join"

export default function Home() {
  return (
      <>
        <Hero/>
        <Stats/>
        <Services/>
        <Solutions/>
        <Testimonial />
        <TestimonyPosts/>
        <BlogSection/>
        <BlogPosts/>
        <Donate />
        <Join />
      </>
  );
}
