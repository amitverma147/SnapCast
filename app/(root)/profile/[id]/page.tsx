import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import { dummyCards } from "@/constants";

const page = async ({ params }: ParamsWithSearch) => {
  const { id } = await params;
  return (
    <div className="wrapper page">
      <Header
        subHeader="amitv147@gmail.com"
        title="Amit"
        userImg="/assets/images/dummy.jpg"
      />
      <section className="video-grid">
        {dummyCards.map((cards) => (
          <VideoCard {...cards} key={cards.id} />
        ))}
      </section>
    </div>
  );
};

export default page;
