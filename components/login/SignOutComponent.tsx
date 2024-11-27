/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { signOut } from "next-auth/react";
import { useState } from "react";

export default function SignOutPage() {
  const [message, setMessage] = useState("");

  const handleSignOut = async () => {
    try {
      await signOut();
      setMessage("Successfully signed out!");
    } catch (err) {
      console.error("Sign out error:", err);
      setMessage("Error signing out. Please try again.");
    }
  };

  return (
    <div className="text-center p-4 flex flex-col justify-between h-full py-12">
      <h1 className="text-2xl mb-4 text-zinc-400 ">You{`'`}re logged in</h1>
      <button 
        onClick={handleSignOut}
        className="bg-red-400 hover:bg-red-600 text-zinc-840 px-4 py-2 rounded"
      >
        {message ? "" : "Sign Out"}
      {message && (
        <div>{message}</div>
      )}
      </button>
    </div>
  );
}