import express, { Request, Response } from "express";
import cors from "cors";
import type { Event } from "@repo/types";

const app = express();
app.use(cors());
const PORT = 4000;


const events: Event[] = [
    {
        id: "1",
        title: "Study Sessions",
        date: "2026-05-10",
        location: "Engineering Buildin",
        description: "Study sessions for the upcoming exams"
    },
    {
        id: "2",
        title: "Hackathon Event",
        date: "2026-05-15",
        location: "City Campus",
        description: "Hackathon event for the upcoming hackathon"
    },
    {
        id: "3",
        title: "Career Fair",
        date: "2026-05-20",
        location: "Business School",
        description: "Career fair for the upcoming carrers"
    }
];

app.get("/", (_req: Request, res: Response) => {
    res.send("Backend is running");
});

app.get("/api/events", (_req: Request, res: Response) => {
    res.json(events);
});

// Only listen locally, not on Vercel
if (process.env.NODE_ENV !== "production") {
    const PORT = 4000;
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

export default app;