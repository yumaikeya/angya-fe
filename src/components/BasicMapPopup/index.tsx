import React from "react"
import { Popup, PopupEvent } from 'react-map-gl/maplibre'

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
        <Popup
          longitude={longitude}
          latitude={latitude}
          anchor={anchor}
          onOpen={onOpen}
          onClose={onClose}
          onClick={onClick}
          style={{width, minWidth: "150px"}}
          closeButton={false}
          closeOnClick={false}
        >
          {children}
        </Popup>
      )
}    
  
  export default MapPopup