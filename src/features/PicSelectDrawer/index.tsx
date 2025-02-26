import { useEffect } from "react"
import { Image, SimpleGrid, For, Badge, Box, Show } from "@chakra-ui/react"
import RightDrawer from "@/components/BasicDrawer/rightDrawer"
import { useListPhotos } from "@/apis/photo"
import { SlCheck } from "react-icons/sl";

type Props = {
    open: boolean
    setOpen?: (open: boolean) => void
    title: string
    selectedPhoto: {id: string | null, src: string | null, spot: string | null}
    setSelectedPhoto: (photo: {id: string | null, src: string | null, spot: string | null}) => void
}

const PicSelectDrawer = ({open, setOpen, title, selectedPhoto, setSelectedPhoto}: Props) => {
  const photos = useListPhotos()
  const photoLists = photos.data && photos.data.map((item) => item)

  useEffect(() => {
    !open && setSelectedPhoto({id: null, src: null, spot: null}) // drawerを開くたびにselectedPhotoを初期化
  }, [open])

  return (
  <RightDrawer open={open} setOpen={setOpen} title={title}>
    <SimpleGrid columns={2} gap="1">
    <For each={photoLists}>
      {
        ({id, src, spot }) => <Box key={id} position={"relative"}>
          <Show when={id === selectedPhoto.id}>
            <Box position={"absolute"} top={"25px"} left={"50px"}><SlCheck size={"50px"} color={"white"} valiant={"outline"}/></Box>
          </Show>
          <Image src={src} onClick={() => setSelectedPhoto({id: id, src: src, spot: spot})} />
          <Badge size={"sm"} colorPalette={"teal"} position={"absolute"} bottom={0} color={"white"}>{spot}</Badge>
        </Box>
      }
    </For>
    </SimpleGrid>
  </RightDrawer>  
  )
}

export default PicSelectDrawer
