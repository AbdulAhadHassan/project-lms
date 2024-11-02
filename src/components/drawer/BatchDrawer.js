import * as React from "react"

import { cn } from "@/lib/utils"
// import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
export function BatchDrawerInput({ open, setOpen }) {
  const isDesktop = true

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
     
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Batch</DialogTitle>
            <DialogDescription>
                Add a new batch to the system
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Add Batch</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Add Batch</DrawerTitle>
          <DrawerDescription>
            Add a new batch to the system
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function ProfileForm({ className }) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="name"> Batch Name</Label>
        <Input required type="text" id="name" defaultValue="" />
      </div>

  
      <div className="grid gap-2">
      <Label htmlFor="status"> Status</Label>
      <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select status" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Status</SelectLabel>
          <SelectItem value="ongoing">ongoing</SelectItem>
          <SelectItem value="pending">pending</SelectItem>
          <SelectItem value="cancelled">cancelled</SelectItem>
          <SelectItem value="merged">merged</SelectItem>
          <SelectItem value="completed">completed</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
      </div>
    
      <div className="grid gap-2">
      <Label htmlFor="course"> Course</Label>

      <Select>
      <SelectTrigger >
        <SelectValue placeholder="Select course" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Course</SelectLabel>
          <SelectItem value="c#">c#</SelectItem>
          <SelectItem value="java">java</SelectItem>
          <SelectItem value="python">python</SelectItem>
          <SelectItem value="javascript">javascript</SelectItem>
          <SelectItem value="c++">c++</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>  
      </div>
      <div className="grid gap-2">
        <Label htmlFor="students"> Students</Label>
        <Input required id="students" defaultValue="" />
      </div>
      <div className="grid gap-2">
      <Label htmlFor="trainer"> Trainer</Label>
      <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select trainer" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Trainer</SelectLabel>
          <SelectItem value="Ali">Ali</SelectItem>
          <SelectItem value="Abdul">Abdul</SelectItem>
          <SelectItem value="Adam">Adam</SelectItem>
          <SelectItem value="Azal">Azal</SelectItem>
          <SelectItem value="jamil">jamil</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>  
      </div>
    
        <Button type="submit">Add Batch</Button>
    </form>
  )
}
