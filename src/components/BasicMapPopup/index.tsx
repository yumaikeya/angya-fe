import React from "react"
import { Popup, PopupEvent } from 'react-map-gl/maplibre'
import { Box } from "@chakra-ui/react"

  type Props = {
    latitude: number
    longitude: number
    anchor?: string
    onOpen?: (evt: PopupEvent) => void
    onClose?: (evt: PopupEvent) => void
    onClick?: (e: any) => void
    children?: React.ReactNode
    width?: string
}
  const MapPopup = ({latitude, longitude, anchor = "bottom", onOpen, onClose, onClick, width, children}: Props) => {

      return (
        <Box onClick={onClick}>
        <Popup
          longitude={longitude}
          latitude={latitude}
          anchor={anchor}
          onOpen={onOpen}
          onClose={onClose}
          style={{width, maxWidth: "1000px", minWidth: "80px"}}
          closeButton={false}
          closeOnClick={false}
        >
          {children}
        </Popup>
        </Box>
      )
}    
  
  export default MapPopup