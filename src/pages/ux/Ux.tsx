'use client';

const Ux = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <iframe
        src="https://uxintace.com/"
        title="UX"
        className="size-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default Ux;
