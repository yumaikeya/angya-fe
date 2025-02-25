import MapPopup from "@/components/BasicMapPopup"
import { Image, Box } from "@chakra-ui/react"


  type Props = {
    latitude: number
    longitude: number
    anchor?: string
    selectedPhoto: {id: string | null, src: string | null, spot: string | null}
    onClose?: (e: any) => void
    onClick?: (e: any) => void
}

const PoiPopup = ({latitude, longitude, onClose, selectedPhoto}: Props) => {
    return (
        <MapPopup latitude={latitude} longitude={longitude} width={"15vw"} onClose={onClose}>
            <Image src={selectedPhoto.id ? selectedPhoto.src : "/black.png"}/>
            <Box height={"50px"} pt={2} color={"#000"}>hello</Box>
        </MapPopup>
    )
}

export default PoiPopup