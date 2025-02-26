import useSWR from 'swr'
import { fetcher } from '@/utils/swr'
import { API_EP } from '@/utils/constants/common'
import { Photo } from '../photo'

// type PoiRequest = {
//   src: string | ArrayBuffer
//   spot: string
// }

type PoisResponse = {
    isLoading: boolean
    error: boolean
    data : {
        id: string
        photo: Photo
        latitude: number
        longitude: number
        comment: string
        createdAt: string
        updatedAt: string
    }[] | []
}

// export const createPoiRequest = async (url: string, { arg }: { arg: PoiRequest }) => {
//   await fetch(url, { method: "POST", body: JSON.stringify(arg) }).then((res) => res.json());
// }

// export const useRegisterPhoto = (req: PoiRequest) => {
//   fetch(API_EP+'/api/photos', {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify(req)
//   })
//   .then(response => response.json())
//   .then(data => {
//     console.log('Success:', data);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });
// }

export const useListPois = (): PoisResponse => {
  const { data, error, isLoading }: {data: {id: string, photo: Photo, latitude: number, longitude: number, comment: string, createdAt: string, updatedAt: string}[] | [], error: boolean, isLoading: boolean} = useSWR(API_EP+'/api/pois', fetcher, { refreshInterval: 15000 })
 
  if (error) return {isLoading: false, error: true, data: []}
  if (isLoading) return {isLoading: true, error: false, data: []}
  return {isLoading: false, error: false, data: data}
}