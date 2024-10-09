// src/components/Interviews.jsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const interviewsData = [
  { date: "12/08/24", candidate: "Danish", level: "SRIJAN - Level 2" },
  { date: "13/08/24", candidate: "Fahad", level: "SRIJAN - Level 2" },
];

export default function Interviews() {
  return (
    <>
      <h2 className="text-lg font-semibold mb-4">Upcoming Interviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {interviewsData.map(({ date, candidate, level }, index) => (
          <Card
            key={index}
            className={index === 0 ? "bg-red-50 border-red-100" : ""}
          >
            <CardContent className="p-4">
              <p className="font-semibold">{`${date} - ${candidate}`}</p>
              <p className="text-sm text-gray-600">{level}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
