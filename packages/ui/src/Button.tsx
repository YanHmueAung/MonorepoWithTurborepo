import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
    return (
        <button
            {...props}
            style={{
                background: "#111827",
                color: "white",
                border: "none",
                borderRadius: "10px",
                padding: "10px 14px",
                cursor: "pointer"
            }}
        />
    );
}