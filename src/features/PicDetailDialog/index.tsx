import React, { useState, useEffect } from "react"
import { Show } from "@chakra-ui/react"
import CoverDialog from "@/components/BasicDialog/coverDialog" 
import FillButton from "@/components/BasicIconButton/fillButton"
import ImageUploader from "@/components/BasicUploader/imageUploader"
import TagList from "@/components/BasicTags/tagList"
import { useListSpots } from "@/apis/spot"
import { useRegisterPhoto } from "@/apis/photo"


type Props = {
    open: boolean
    setOpen: (open: boolean) => void
}

const PicDetailDrawer = ({open, setOpen}: Props) => {

    return (
        <CoverDialog open={open} setOpen={setOpen} title={"Photo detail"} >
        </CoverDialog>
    )  
}

export default PicDetailDrawer