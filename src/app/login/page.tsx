"use client";

import { useState } from "react";
import { InputComponent } from "../../components/Input";
import { ButtonComponent } from "@/components/Button";
import Image from 'next/image';
import GoogleIcon from "../../../public/google.svg";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

export default function Login() {
  
  const [user] = useAuthState(auth);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleAuthenticate = () => {

  }

  const handleAuthenticateGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
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
