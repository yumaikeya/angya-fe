import { useState, useEffect } from "react"
import { Image, SimpleGrid, For, Badge, Box, Show } from "@chakra-ui/react"
import RightDrawer from "@/components/BasicDrawer/rightDrawer"
import { useListPhotos } from "@/apis/photo"
import { SlCheck } from "react-icons/sl";

type Props = {
    open: boolean
    setOpen?: (open: boolean) => void
    title: string
}

const PicDetailDrawer = ({open, setOpen, title}: Props) => {
  const photos = useListPhotos()
  const [selectedPhotoId, setSelectedPhotoId] = useState("")
  const photoLists = photos.data && photos.data.map((item) => item)

  useEffect(() => {
    !open && setSelectedPhotoId("") // drawerを開くたびにselectedPhotoを初期化
  }, [open])

  return (
  <RightDrawer open={open} setOpen={setOpen} title={title}>
    <SimpleGrid columns={2} gap="1">
    <For each={photoLists}>
      {
        ({id, src, mimeType, spot }) => <Box key={id} position={"relative"}>
          <Show when={id === selectedPhotoId}>
            <Box position={"absolute"} top={"25px"} left={"50px"}><SlCheck size={"50px"} color={"white"} valiant={"outline"}/></Box>
          </Show>
          <Image src={"data:"+mimeType+";base64,"+src} onClick={() => setSelectedPhotoId(id)} />
          <Badge size={"sm"} colorPalette={"teal"} position={"absolute"} bottom={0} color={"white"}>{spot}</Badge>
        </Box>
      }
    </For>
    </SimpleGrid>
  </RightDrawer>  
  )
}

export default PicDetailDrawer
