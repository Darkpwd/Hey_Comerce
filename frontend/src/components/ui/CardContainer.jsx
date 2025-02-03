import HomeCard from "./HomeCard";

export const CardContainer = () => {
  return (
    <div className="container">
      <h3 className="text-center mb-4">Blogs</h3>
      <div className="row">
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </div>
    </div>
  );
};
