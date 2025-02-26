import { useState } from 'react'
import { Box, Show, For } from '@chakra-ui/react'
import { Map, NavigationControl } from 'react-map-gl/maplibre' // Sourceは地図にデータの可視化するやつ
import 'maplibre-gl/dist/maplibre-gl.css'
import PicSelectDrawer from '@/features/PicSelectDrawer';
import PicImportDrawer from '@/features/PicImportDialog';
import PoiPopup from '@/features/PoiPopup';
import { useListPois } from '@/apis/poi';

const ROADMAP = 'https://tile.openstreetmap.jp/styles/osm-bright-ja/style.json'
// const ROADMAP = "https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png"

const Home = () => {
  const [detailOpen, setDetailOpen] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [point, setPoint] = useState({latitude: null, longitude: null})
  const [selectedPhoto, setSelectedPhoto] = useState({id: null, src: null, spot: null})

  const pois = useListPois()
  const poiList = pois.data && pois.data.map((item) => item)

  return (
    <Box position="relative" width="100vw" height="100dvh">
      <Map
        initialViewState={{ latitude: 35.6895, longitude: 139.6917, zoom: 18, pitch: 70, bearing: 0 }}
        mapStyle={ROADMAP}
        style={{ width: '100%', height: '100%' }}
        onClick={({lngLat: {lng, lat}}) => {
          setPoint({latitude: lat, longitude: lng})
          setDetailOpen(true)
        }}
        minZoom={15}
        minPitch={60}
        maxPitch={85}
        sky={{
          "sky-color": "#199EF3",
          "sky-horizon-blend": 0.5,
          "horizon-color": "#ffffff",
          "horizon-fog-blend": 0.5,
          "fog-color": "#0000ff",
          "fog-ground-blend": 0.5,
          "atmosphere-blend": ["interpolate", ["linear"], ["zoom"], 0, 1, 10, 1, 12, 0]
        }}
      >
      <For each={poiList}>
        {(poi) => (
          <PoiPopup
            key={poi.id}
            longitude={poi.longitude}
            latitude={poi.latitude}
            // onClose={() => setPoint({latitude: null, longitude: null})}
            selectedPhoto={poi.photo}
          />
        )}
      </For>
      <NavigationControl position="bottom-left" />
      <Show when={detailOpen}>
        <PoiPopup
          longitude={point.longitude}
          latitude={point.latitude}
          onClose={() => setPoint({latitude: null, longitude: null})}
          selectedPhoto={selectedPhoto}
        />
      </Show>
      </Map>
      <PicSelectDrawer
        open={detailOpen}
        setOpen={setDetailOpen}
        title={"Select your image"}
        selectedPhoto={selectedPhoto}
        setSelectedPhoto={setSelectedPhoto}
      />
      <PicImportDrawer open={dialogOpen} setOpen={setDialogOpen} />
    </Box>
  )
}


export default Home