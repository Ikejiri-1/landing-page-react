import "./loading.css";

export function Loader() {
  return (
    <div className="loader-overlay">
      <div className="loader-spinner" />
      <p>Carregando...</p>
    </div>
  );
}
