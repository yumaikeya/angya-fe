import React from "react"
import { IconButton } from "@chakra-ui/react"
import { LuPhone } from "react-icons/lu"
import { GrAdd } from "react-icons/gr";

type Props = {
    onClick: (open: boolean) => void
    size?: string
    icon: string
    position?: string
    right?: number
    bottom?: number
    top?: number
    left?: number
}

const FillButton = ({icon, onClick, size = "md", position, right, bottom, left, top}: Props) => {
  const returnIcon = (t: string): React.ReactNode => {
    switch (t) {
      case "phone":
        return <LuPhone />
      case "plus":
        return <GrAdd />
    } 
  }

  return (
      <IconButton
        rounded="" // full
        aria-label="plus-button"
        size={size}
        onClick={onClick}
        position={position}
        right={right}
        bottom={bottom}
        left={left}
        top={top}
        colorPalette={"teal"}
      >
      {returnIcon(icon)}
      </IconButton>
  )
}

export default FillButton