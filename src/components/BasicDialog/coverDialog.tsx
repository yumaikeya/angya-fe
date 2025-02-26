import React from "react"
import {
  DialogBody,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogCloseTrigger,
} from "@/components/ChakraUI/dialog"

type Props = {
    open: boolean
    setOpen?: (open: boolean) => void
    title: string
    children?: React.ReactNode
}

const CoverDialog = ({open, setOpen, title, children}: Props) => {
  return (
    <DialogRoot size={"cover"}  motionPreset={"scale"} placement={"center"} open={open} onOpenChange={(e) => setOpen(e.open)} >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <DialogBody>
          {children}
        </DialogBody>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  )
}

export default CoverDialog