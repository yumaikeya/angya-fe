import React from "react"
import {
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
} from "@/components/ChakraUI/drawer"

type Props = {
    open: boolean
    setOpen?: (open: boolean) => void
    title: string
    children: React.ReactNode
}

const RightDrawer = ({open, setOpen, children, title}: Props) => {

  return (
    <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)} contained={false} >
      <DrawerContent>
        <DrawerHeader px={2}>
          <DrawerTitle>{title}</DrawerTitle>
        </DrawerHeader>
        <DrawerBody px={2}>
          {children}
        </DrawerBody>
      </DrawerContent>
    </DrawerRoot>
  )
}

export default RightDrawer