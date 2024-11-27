/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"; //important for session components

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignInPage() {
  const [message, setMessage] = useState("");

  const handleSignIn = async () => {
    try {
      await signIn("github");
      setMessage("Signing in...");
    } catch (err) {
      console.error("Sign in error:", err);
      setMessage("Error signing in. Please try again.");
    }
  };

  return (
    <div className="text-center p-4 h-full flex flex-col justify-between py-12">
      <h1 className="text-2xl mb-4 text-zinc-400">Login</h1>
      <button
        onClick={handleSignIn}
        className="bg-zinc-400 py-4 px-2 max-w-40 mx-auto rounded-lg  text-zinc-800 font-semibold tracking-tight leading-none"
      >
        {message ? "" : "Sign in with GitHub"}
      {message && <div>{message}</div>}
      </button>
    </div> 
  );
}
