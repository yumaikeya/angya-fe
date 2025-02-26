import MapPopup from "@/components/BasicMapPopup"
import { Image, Badge, Box } from "@chakra-ui/react"


  type Props = {
    latitude: number
    longitude: number
    spot?: string
    anchor?: string
    selectedPhoto: {id: string | null, src: string | null, spot: string | null}
    onClose?: (e: any) => void
    onClick?: (e: any) => void
    zoomRate?: number
}

const PoiPopup = ({latitude, longitude, onClose, selectedPhoto, onClick}: Props) => {
    // const coefficient = Math.pow(zoomRate - 14, 2)   
    
    return (
        <MapPopup latitude={latitude} longitude={longitude} width={"280px"} onClose={onClose} onClick={onClick}>
            <Image src={selectedPhoto.id ? selectedPhoto.src : "/black.png"} />    
            {selectedPhoto.spot ? <Badge my={2} colorPalette={"teal"} color={"white"}>{selectedPhoto.spot}</Badge> : <Box height={"2vh"} my={2}></Box>}
        </MapPopup>
    )
}

export default PoiPopup