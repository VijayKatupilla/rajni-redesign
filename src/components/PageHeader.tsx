export default function PageHeader({ title }: { title: string }) {
  return (
    <div
      className="relative h-64 flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <h1 className="relative z-10 text-4xl font-bold">{title}</h1>
    </div>
  );
}
