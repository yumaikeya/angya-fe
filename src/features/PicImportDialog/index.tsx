import React, { useState, useEffect } from "react"
import { Show } from "@chakra-ui/react"
import CenterLgDialog from "@/components/BasicDialog/centerLgDialog" 
import FillButton from "@/components/BasicIconButton/fillButton"
import ImageUploader from "@/components/BasicUploader/imageUploader"
import TagList from "@/components/BasicTags/tagList"
import { useListSpots } from "@/apis/spot"
import { useRegisterPhoto } from "@/apis/photo"


type Props = {
    open: boolean
    setOpen: (open: boolean) => void
}

const PlusButton = ({onClick}: { onClick: ((open: boolean) => void); }) => {
    return <FillButton onClick={onClick} icon={"plus"} size={"lg"} position="absolute" left={2} top={2} />  
}

const PicImportDrawer = ({open, setOpen}: Props) => {
    const [selectedTag, setSelectedTag] = useState("")
    const spots = useListSpots()
    const tagList = spots.data && spots.data.map(item => {
        return item.name
    })

    return (
        <CenterLgDialog open={open} setOpen={setOpen} title={"Import your photos"} trigger={<PlusButton onClick={setOpen} />}>
            <TagList tags={tagList} selected={selectedTag} onClick={setSelectedTag}/>
            <Show when={selectedTag != ""}>
                <ImageUploader onAccept={({files}) => {     
                    files.forEach(f => {
                        const reader = new FileReader()
                        reader.addEventListener('load', () => { // ここで写真load時に発火するeventを仕込む
                            if (reader.result) {
                                useRegisterPhoto({src: reader.result, spot: selectedTag})
                                setOpen(false)
                            }
                        })

                        reader.readAsDataURL(f) // ここで写真を読み込んでいる
                    });

                }} disabled={selectedTag === ""} />
            </Show>
        </CenterLgDialog>
    )  
}

export default PicImportDrawer