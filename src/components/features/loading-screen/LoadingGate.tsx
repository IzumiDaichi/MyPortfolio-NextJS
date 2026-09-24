"use client";

import { useState } from "react";
import StarLoadingScreen from "./LoadingAnimation";

export default function LoadingGate({ children }) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <StarLoadingScreen onFinished={() => setLoading(false)} />}
      {children}
    </>
  );
}