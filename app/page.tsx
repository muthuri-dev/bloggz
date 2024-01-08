import { getSession } from "next-auth/react";

export default function Home() {
  const session = getSession();
  if (!session) {
    console.log("please login first");
  } else {
    console.log(session);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* { 
     session? (<div> Bloggz app</div>):(<div>please login</div>)
     } */}
      Bloggz app
    </main>
  );
}
