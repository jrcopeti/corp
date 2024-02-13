import scaleImg from "/public/scale.jpg";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <Hero
      imgData={scaleImg}
      imgAlt="steel factory"
      title="Scale up your app with us!"
    />
  );
}
