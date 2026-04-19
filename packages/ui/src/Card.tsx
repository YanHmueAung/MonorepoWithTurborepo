import React from "react";

type CardProps = {
    children: React.ReactNode;
};

export function Card({ children }: CardProps) {
    return (
        <div
            style={{
                border: "1px solid #ddd",
                borderRadius: "12px",
                padding: "16px",
                marginBottom: "12px",
                background: "white",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
            }}
        >
            {children}
        </div>
    );
}