import { useEffect, useState } from "react";
import type { Event } from "@repo/types";

function App() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function loadEvents() {
      try {
        const response = await fetch("http://localhost:4000/api/events");
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }

        const data: Event[] = await response.json();
        setEvents(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    void loadEvents();
  }, []);

  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "24px" }}>
      <h1>Campus Events</h1>

      {loading && <p>Loading events...</p>}
      {error && <p>{error}</p>}

      {!loading &&
        !error &&
        events.map((event) => (
          <div
            key={event.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "16px",
              marginBottom: "12px"
            }}
          >
            <h3>{event.title}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>
          </div>
        ))}
    </main>
  );
}

export default App;