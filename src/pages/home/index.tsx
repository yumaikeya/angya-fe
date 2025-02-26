import { useState, useEffect } from 'react'
import { Box, Show, For } from '@chakra-ui/react'
import { Map, NavigationControl, Layer, Source } from 'react-map-gl/maplibre' // Sourceは地図にデータの可視化するやつ
import 'maplibre-gl/dist/maplibre-gl.css'
import PicSelectDrawer from '@/features/PicSelectDrawer';
import PicImportDialog from '@/features/PicImportDialog';
import PicDetailDialog from '@/features/PicDetailDialog';
import PoiPopup from '@/features/PoiPopup';
import { useListPois } from '@/apis/poi';


// https://cyberjapandata.gsi.go.jp/xyz/ort_USA10/{z}/{x}/{y}.png 1945年のやつ
// https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z} google streat 白っぽいやつ
// https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z} google road 黒っぽいやつ
// https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg お絵描きみたいなやつ
// https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}.png モノクロのやつ
// https://a.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png サイクリストのためのやつ？
// https://tile.mierune.co.jp/mierune/{z}/{x}/{y}.png めっちゃしろい
// https://tile.mierune.co.jp/mierune_mono/{z}/{x}/{y}.png モノクロすぎる, 田舎無理


const Home = () => {
  const [positionDrawerOpen, setPositionDrawerOpen] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [point, setPoint] = useState({latitude: null, longitude: null})
  const [selectedPhoto, setSelectedPhoto] = useState({id: null, src: null, spot: null})
  const [selectedDetailPhotoId, setSelectedDetailPhotoId] = useState("")
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [viewState, setViewState] = useState({longitude: 139.76922737034525, latitude: 35.6985868803826, zoom: 18, pitch: 70});

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []); // online or offlineの判定

  console.log({selectedDetailPhotoId});
  

  const ROADMAP = isOnline ? "https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}" : "http://localhost:8080/styles/osm-liberty/{z}/{x}/{y}.png" 
  const pois = useListPois()
  const poiList = pois.data && pois.data.map((item) => item)
  
  return (
    <Box position="relative" width="100vw" height="100dvh">
      <Map
        {...viewState}
        onMove={({viewState}) => setViewState(viewState)}
        onClick={({lngLat: {lng, lat}}) => {
          setPoint({latitude: lat, longitude: lng})
          setPositionDrawerOpen(true)
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
      <Source id="map-source" type="raster" tiles={[ROADMAP]} tileSize={256}>
        <Layer id="raster-layer" type="raster" minzoom={15} />
      </Source>
      <For each={poiList}>
        {(poi) => (
          <PoiPopup
            key={poi.id}
            longitude={poi.longitude}
            latitude={poi.latitude}
            selectedPhoto={poi.photo}
            zoomRate={viewState.zoom}
            onClick={() => setSelectedDetailPhotoId(poi.photo.id)}
          />
        )}
      </For>
      <NavigationControl position="bottom-left" />
      <Show when={positionDrawerOpen}>
        <PoiPopup
          longitude={point.longitude}
          latitude={point.latitude}
          onClose={() => setPoint({latitude: null, longitude: null})}
          selectedPhoto={selectedPhoto}
        />
      </Show>
      </Map>
      <PicSelectDrawer
        open={positionDrawerOpen}
        setOpen={setPositionDrawerOpen}
        selectedLongitude={point.longitude}
        selectedLatitude={point.latitude}
        title={"Select your image"}
        selectedPhoto={selectedPhoto}
        setSelectedPhoto={setSelectedPhoto}
      />
      <PicImportDialog open={dialogOpen} setOpen={setDialogOpen} />
      <PicDetailDialog open={selectedDetailPhotoId != ""} setOpen={() => setSelectedDetailPhotoId("")}/>
    </Box>
  )
}


export default Home