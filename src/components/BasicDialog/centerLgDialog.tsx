import React from "react"
import {
  DialogBody,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ChakraUI/dialog"

type Props = {
    open: boolean
    setOpen?: (open: boolean) => void
    title: string
    children?: React.ReactNode
    trigger: React.ReactNode
}

const CenterLgDialog = ({open, setOpen, title, children, trigger}: Props) => {
  return (
    <DialogRoot size={"lg"} placement="center" open={open} onOpenChange={(e) => setOpen(e.open)} >
      <DialogTrigger asChild>
      {trigger}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <DialogBody>
          {children}
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  )
}

export default CenterLgDialog