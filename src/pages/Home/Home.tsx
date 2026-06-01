import { Hero } from "../../components/Hero";
import { Editorial } from "../../components/Editorial";
import { CollectionGrid } from "../../components/CollectionGrid";

export function Home() {
  return (
    <>
      <Hero />
      <CollectionGrid />
      <Editorial />
    </>
  );
}
