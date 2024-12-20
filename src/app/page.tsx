import Image from "next/image";
import {Tabs, TabsContent, TabsList, TabsTrigger} from '../components/ui/tabs'
import LoginForm from "@/components/home/LoginForm";

export default function Home() {
  return (
   <>
      <main className="flex min-h-screen items-center justify-between">
        <aside className="h-screen hidden lg:block">
            <Image src="/login.png" alt="login" width={554} height={832} />
        </aside>
          <div className="flex flex-col items-center justify-center m-auto">
              <div className="bg-rose-600 rounded-full m-auto size-[75px]"></div>
              <h1 className="uppercase text-[48px] font-extrabold text-white">Sphere</h1>
                <Tabs defaultValue="login" className="w-[400px] flex flex-col items-center">
                    <TabsList>
                        <TabsTrigger value="login">Login</TabsTrigger>
                        <TabsTrigger value="register">Register</TabsTrigger>
                    </TabsList>
                    <TabsContent value="login">
                        <LoginForm/>  
                    </TabsContent> 
                    <TabsContent value="register"><p>Register</p></TabsContent> 
                </Tabs>
          </div>
      </main>
   </>
  );
}
