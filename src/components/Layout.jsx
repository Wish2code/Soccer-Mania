import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#e8f5e9",
      }}
    >
      <Navbar />
      <main style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}>
        {children}
      </main>
    </div>
  );
}