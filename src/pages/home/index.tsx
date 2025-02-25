import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import * as maplibregl from "maplibre-gl";
import { Map, NavigationControl } from 'react-map-gl/maplibre' // Sourceは地図にデータの可視化するやつ
import 'maplibre-gl/dist/maplibre-gl.css'
import PicDetailDrawer from '@/features/PicDetailDrawer';
import PicImportDrawer from '@/features/PicImportDialog';


const ROADMAP = 'https://tile.openstreetmap.jp/styles/osm-bright-ja/style.json'
// const ROADMAP = "https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png"

export default function Home() {
  const [detailOpen, setDetailOpen] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <>
    <Box position="relative" width="100vw" height="100dvh">
      <Map
        initialViewState={{ latitude: 35.6895, longitude: 139.6917, zoom: 17, pitch: 70 }}
        mapLib={maplibregl}
        mapStyle={ROADMAP}
        style={{ width: '100%', height: '100%' }}
        onClick={() => setDetailOpen(true)}
      >
        <NavigationControl position="bottom-left" />
      </Map>
    </Box>
    <PicDetailDrawer open={detailOpen} setOpen={setDetailOpen} title={"Select your image"}/>
    <PicImportDrawer open={dialogOpen} setOpen={setDialogOpen} />
    </>
  )
}
