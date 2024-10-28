"use client"

import { BatchModal } from "@/components/dataTable/BatchModal";
import { Button } from "@/components/ui/button";
import { BatchDrawerInput } from "@/components/drawer/BatchDrawer";
import * as React from "react"

export default function AdminBatchesPage() {


  const [open, setOpen] = React.useState(false);

  return (

    <div className="p-4">
      <div>
        <div className="flex justify-between items-center gap-2">
          <h1 className="text-2xl font-bold">Batch</h1>
          <Button onClick={() => setOpen(true)}>Add Batch</Button>
        </div>
      </div>
      <BatchModal />
      <BatchDrawerInput open={open} setOpen={setOpen} />
    </div>

  );
}
