'use client';

const Skphoe = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <iframe
        src="https://skphoebe.com/"
        title="Skphoe"
        className="size-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default Skphoe;
