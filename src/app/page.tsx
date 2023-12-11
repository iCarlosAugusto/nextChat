"use client";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  onAuthStateChanged(auth, (user) => {
    if(user){
      router.push("/chat")
    } else {
      router.push("/login")
    }
  })

  return (
    <main>
      <h1>Carregando...</h1>
    </main>
  );
}
