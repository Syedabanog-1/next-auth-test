import { SessionWrapper } from "../../components/SessionWrapper";
import AuthComponent from "../../components/login/AuthComponent";
import SignOutComponent from "../../components/login/SignOutComponent";
import { auth } from "./lib/auth";

export default async function Login() {
  const session = await auth();
  const isAuthenticated = !!session?.user;

  return (
    <main className="">
      <div className="mt-40 h-[30vw] w-3/12 mx-auto bg-zinc-900 rounded-lg">
      <SessionWrapper>
        {isAuthenticated
          ? <SignOutComponent />
          : <AuthComponent />
        }
       </SessionWrapper>
      </div>
    </main>
  );
 }