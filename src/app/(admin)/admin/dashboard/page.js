'use client'

import { CourseModal } from "@/components/dataTable/CourseModal";
import { Button } from "@/components/ui/button";
import { CourseDrawerInput } from "@/components/drawer/CourseDrawer";
import * as React from "react"

export default function AdminDashboardPage() {


  const [open, setOpen] = React.useState(false);

  return (

    <div className="p-4">
      <div>
        <div className="flex justify-between items-center gap-2">
          <h1 className="text-2xl font-bold">Courses</h1>
          <Button onClick={() => setOpen(true)}>Add Course</Button>
        </div>
      </div>
      <CourseModal />
      <CourseDrawerInput open={open} setOpen={setOpen} />
    </div>

  );
}
