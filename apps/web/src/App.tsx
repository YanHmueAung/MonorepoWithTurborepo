import { useEffect, useState } from "react";
import type { Event } from "@repo/types";
import { Button, Card } from "@repo/ui";

function App() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  async function loadEvents() {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:4000/api/events");
      if (!response.ok) {
        throw new Error("Failed to fetch events");
      }

      const data: Event[] = await response.json();
      setEvents(data);
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void loadEvents();
  }, []);

  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "24px" }}>
      <h1>Campus Events</h1>
      <p>Monorepo demo with shared types and shared UI.</p>

      <div style={{ marginBottom: "16px" }}>
        <Button onClick={() => void loadEvents()}>Refresh Events</Button>
      </div>

      {loading && <p>Loading events...</p>}
      {error && <p>{error}</p>}

      {!loading &&
        !error &&
        events.map((event) => (
          <Card key={event.id}>
            <h3>{event.title}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>
          </Card>
        ))}
    </main>
  );
}

export default App;