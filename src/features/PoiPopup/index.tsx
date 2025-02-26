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
}

const PoiPopup = ({latitude, longitude, onClose, selectedPhoto}: Props) => {
    
    return (
        <MapPopup latitude={latitude} longitude={longitude} width={"15vw"} onClose={onClose}>
            <Image src={selectedPhoto.id ? selectedPhoto.src : "/black.png"}/>
            {selectedPhoto.spot ? <Badge my={2} colorPalette={"teal"} color={"white"}>{selectedPhoto.spot}</Badge> : <Box height={"20px"} my={2}></Box>}
        </MapPopup>
    )
}

export default PoiPopup