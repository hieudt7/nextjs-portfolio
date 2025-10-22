'use client';

const Garena = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <iframe
        src="https://wig.fo4.garena.vn/"
        title="Future"
        className="size-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default Garena;
