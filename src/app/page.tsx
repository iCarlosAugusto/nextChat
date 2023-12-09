"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import NavBar from "../../components/NavBar";

export default function Home() {
  const [user] = useAuthState(auth);

  return (
    <main>
      <NavBar />
      {!user ? <p> Não está logado</p> : <p> Estálogad </p>}
    </main>
  );
}
