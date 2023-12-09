"use client";

import { useState } from "react";
import { InputComponent } from "../../components/Input";
import { ButtonComponent } from "@/components/Button";

export default function Login() {

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleAuthenticate = () => {

  }

  return (
    <main className="flex flex-col">
      <p>Seja bem-vindo ao NextChat</p>

      <InputComponent value={userEmail} onChange={e => setUserEmail(e.target.value)}/>

      <InputComponent value={userPassword} onChange={e => setUserPassword(e.target.value)}/>

      <ButtonComponent label="Entrar" onClick={handleAuthenticate}/>
    </main>
  );
}
