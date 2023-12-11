"use client";

import { useState } from "react";
import { InputComponent } from "../../components/Input";
import { ButtonComponent } from "@/components/Button";
import Image from 'next/image';
import GoogleIcon from "../../../public/google.svg";
import { auth } from "@/firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Login() {
  
  const router = useRouter();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleAuthenticate = () => {

  }

  const handleAuthenticateGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithRedirect(auth, provider);
    router.push("/chat");
  }

  return (
    <main className="flex flex-col">
      <p>Seja bem-vindo ao NextChat</p>

      <InputComponent value={userEmail} onChange={e => setUserEmail(e.target.value)}/>

      <InputComponent value={userPassword} onChange={e => setUserPassword(e.target.value)}/>

      <Image src={GoogleIcon} alt="Google Login" onClick={handleAuthenticateGoogle} className="cursor-pointer"/>
      <ButtonComponent label="Entrar" onClick={handleAuthenticate}/>
    </main>
  );
}
