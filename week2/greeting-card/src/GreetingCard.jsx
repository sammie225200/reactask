function GreetingCard({ name, message, color = "lightgray" }) {
  const cardStyle = {
    backgroundColor: color,
    color: "#333",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    width: "250px",
    margin: "10px auto",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };

  return (
    <div style={cardStyle}>
      <h2>Hello, {name}!</h2>
      <p>{message}</p>
    </div>
  );
}

export default GreetingCard;