import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
const PORT = 4000;

type Event = {
    id: string;
    title: string;
    date: string;
    location: string;
};

const events: Event[] = [
    {
        id: "1",
        title: "Study Sessions",
        date: "2026-05-10",
        location: "Engineering Building"
    },
    {
        id: "2",
        title: "Hackathon",
        date: "2026-05-15",
        location: "City Campus"
    },
    {
        id: "3",
        title: "Career Fair",
        date: "2026-05-20",
        location: "Business School"
    }
];

app.get("/", (_req, res) => {
    res.send("Backend is running");
});

app.get("/api/events", (_req, res) => {
    res.json(events);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});