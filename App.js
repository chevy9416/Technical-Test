import React from "react";
import Navigation from "./navigator/Navigation";
import { UserProvider } from "./utils/Context/Context";

export default function App() {
  return (
    <UserProvider>
      <Navigation />
    </UserProvider>
  );
}
