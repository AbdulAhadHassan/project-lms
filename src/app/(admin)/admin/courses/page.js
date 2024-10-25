'use client'

import { DataTable } from "@/components/dataTable/dataTable";
import { Button } from "@/components/ui/button";
import { DrawerInput } from "@/components/drawer/Drawer";
import * as React from "react"

export default function AdminCoursesPage() {


  const [open, setOpen] = React.useState(false);

  return (

    <div className="p-4">
      <div>
        <div className="flex justify-between items-center gap-2">
          <h1 className="text-2xl font-bold">Courses</h1>
          <Button onClick={() => setOpen(true)}>Add Course</Button>
        </div>
      </div>
      <DataTable />
      <DrawerInput open={open} setOpen={setOpen} />
    </div>

  );
}
