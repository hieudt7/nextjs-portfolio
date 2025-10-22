'use client';

const Nutrition = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <iframe
        src="https://more-nutrition.webflow.io/"
        title="Nutrition"
        className="size-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default Nutrition;
