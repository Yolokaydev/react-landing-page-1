import InfoHeaderCard from "../components/InfoHeaderCard";
import { Partners } from "../components/Partners";
import Team from "../components/Team";

export default function Home() {
  return (
    <div className="pt-14 px-4">
      <Partners />
      <section>
        <InfoHeaderCard />
        <InfoHeaderCard />
      </section>
      <Team />
    </div>
  );
}
