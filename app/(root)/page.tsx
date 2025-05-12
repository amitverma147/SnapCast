import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import { dummyCards } from "@/constants";

const Page = () => {
  return (
    <main className="wrapper page">
      <Header title="All Videos" subHeader="Public Library" />

      <section className="video-grid">
        {dummyCards.map((cards) => (
          <VideoCard {...cards} key={cards.id} />
        ))}
      </section>
    </main>
  );
};

export default Page;
