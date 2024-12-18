import React from "react";
import "./style.css";
import ParentOfABC from "./Parent";
import { CountProvider } from "../context/CountContext";

// 1. whenever state changes, the component re-renders
// 2. whenever parent re-renders, all children re-render

export default function PropDrilling() {
  return (
    <CountProvider>
      <ParentOfABC />
    </CountProvider>
  );
}
