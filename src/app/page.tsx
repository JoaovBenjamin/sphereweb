import Image from "next/image";
import {Tabs, TabsContent, TabsList, TabsTrigger} from '../components/ui/tabs'
import LoginForm from "@/components/home/LoginForm";
import RegisterForm from "@/components/home/RegisterForm";

export default function Home() {
  return (
   <>
      <main className="flex min-h-screen items-center justify-between">
        <aside className="max-h-screen hidden lg:block">
            <Image src="/login.png" alt="login" width={554} height={832}/>
        </aside>
          <div className="flex flex-col items-center justify-center m-auto  gap-4 ">
              <div className="bg-rose-600 rounded-full m-auto size-[75px]"></div>
              <h1 className="uppercase text-[48px] font-extrabold ">Sphere</h1>
                <Tabs defaultValue="login" className="w-[400px] flex flex-col items-center">
                    <TabsList className="flex gap-10 rounded-xl">
                        <TabsTrigger value="login" className='rounded-xl'>Login</TabsTrigger>
                        <TabsTrigger value="register" className='rounded-xl'>Register</TabsTrigger>
                    </TabsList>
                    <TabsContent value="login">
                        <LoginForm/>  
                    </TabsContent> 
                    <TabsContent value="register">
                        <RegisterForm/>  
                    </TabsContent> 
                </Tabs>
          </div>
      </main>
   </>
  );
}
