function Background({ children }) {
  return (
    <div className="relative w-full h-full">
      {children}
      <div className="absolute inset-0 bg-grid-pattern -z-10"></div>
    </div>
  );
}

export default Background;
