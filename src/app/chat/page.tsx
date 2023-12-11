"use client";

import { ButtonComponent } from "@/components/Button";
import { auth } from "@/firebase";
import { useRouter } from "next/navigation";

export default function ChatPage() {
  const router = useRouter();

  const signOut = async () => {
    await auth.signOut();
    router.push("/login");
  };

  return <>
    <ButtonComponent label="Fazer logout" onClick={signOut}/>
    <h1>This is the chat!</h1>
  </>
}