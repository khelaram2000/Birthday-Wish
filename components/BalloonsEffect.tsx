"use client";

import { useEffect } from "react";
import { balloons, textBalloons } from "balloons-js";

export default function BalloonsEffect() {
  useEffect(() => {
    // Regular balloons start immediately
    balloons();
    
    // "Sagun" balloons start immediately
    textBalloons([
      {
        text: "Sagun",
        fontSize: 120,
        color: "#03ff31ff",
      }
    ]);

    // "Janam Maha" balloons delayed by 2500ms (2.5 seconds)
    setTimeout(() => {
      textBalloons([
        {
          text: "Janam Maha",
          fontSize: 120,
          color: "#d41b1bff",
        }
      ]);
    }, 2500);

    // Emoji balloons delayed by 5000ms (5 seconds)
    setTimeout(() => {
      textBalloons([
        {
          text: "💩🔥😈",
          fontSize: 120,
          color: "#000000",
        }
      ]);
    }, 5000);
  }, []);

  return null;
}
