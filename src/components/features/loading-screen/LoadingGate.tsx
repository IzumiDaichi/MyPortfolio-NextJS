"use client";

import { useState } from "react";
import StarLoadingScreen from "./LoadingAnimation";

type LoadingGateProps = {
  children: React.ReactNode;
};

export default function LoadingGate({ children }: LoadingGateProps) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <StarLoadingScreen onFinished={() => setLoading(false)} />}
      {children}
    </>
  );
}