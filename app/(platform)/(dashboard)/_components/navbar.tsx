import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { UserButton, auth } from "@clerk/nextjs";
import { CreateEventForm } from "@/actions/create-event";

export function Navbar() {

  const {userId} = auth();
  
  const CreateEventFormWithId = CreateEventForm.bind(null ,userId||" ")

  return (
    <nav className="fixed z-50 top-0 h-14 bg-white shadow-sm border-b w-full flex items-center">
      <div className="flex items-center gap-x-4">
        <div className="flex">
          <Logo />
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button size={"sm"} variant={"primary"}>
              Create
            </Button>
          </DialogTrigger>
          <DialogContent className="w-[500px]">
            <DialogHeader>
              <DialogTitle> Create A Event </DialogTitle>
            </DialogHeader>
            <DialogDescription>
              Create A Event Form Instance By Filling This
            </DialogDescription>
            <form className="grid gap-4 py-4" action={CreateEventFormWithId} id="eventform">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  eventname
                </Label>
                <Input name="title" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="startdate" className="text-right">
                  startdate
                </Label>
                <Input name="startdate" type="date" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="enddate" className="text-right">
                  enddate
                </Label>
                <Input name="enddate" type="date" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="departmentname" className="text-right">
                  departmentname
                </Label>
                <Input id="username" type="text"  name="departmentname" className="col-span-3" />
              </div>
              <DialogFooter>
                <DialogClose asChild>
              <Button type="submit">Save changes</Button>
              </DialogClose>
            </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="ml-auto flex items-center gap-x-2">
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
}
