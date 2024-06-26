import "./Loader.css";
export default function Loader() {
  return (
    <section className="container">
      <div className="loader-1">
        {/* We need 9 dots */}
        <div className="dot dot-1"></div>
        <div className="dot dot-2"></div>
        <div className="dot dot-3"></div>
        <div className="dot dot-4"></div>
        <div className="dot dot-5"></div>
        <div className="dot dot-6"></div>
        <div className="dot dot-7"></div>
        <div className="dot dot-8"></div>
        <div className="dot dot-9"></div>
      </div>
    </section>
  );
}
