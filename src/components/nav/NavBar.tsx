"use client"

import { logout } from "@/app/actions/user-actions"
import { Button } from "../ui/button"
import { LogOut } from "lucide-react"

export default function NavBar() {
    return(
        <>
        <nav className="absolute top-1 right-1 space-x-2 flex items-center">
                <Button variant={"outline"} size="icon" onClick={() => logout()}>
                    <LogOut className="h-4 w-4" />
                </Button>
        </nav>
        </>
    )
}