'use client';

const Dengi = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <iframe
        src="https://denqid.com/"
        title="Dengi"
        className="size-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default Dengi;
