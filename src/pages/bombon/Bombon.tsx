'use client';

const Bombon = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <iframe
        src="https://bombon.rs/"
        title="Bombon"
        className="size-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default Bombon;
