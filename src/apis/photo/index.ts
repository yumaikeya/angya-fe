import useSWR from 'swr'
import { fetcher } from '@/utils/swr'
import { API_EP } from '@/utils/constants/common'

type PhotoRequest = {
  src: string | ArrayBuffer
  spot: string
}

type PhotoResponse = {
  isLoading: boolean
  error: boolean
  data : {
      id: string
      src: string
      spot: string
      createdAt: string
  } | null
}

type PhotosResponse = {
    isLoading: boolean
    error: boolean
    data : {
        id: string
        src: string
        spot: string
        createdAt: string
    }[] | []
}

export const createPhotoRequest = async (url: string, { arg }: { arg: PhotoRequest }) => {
  await fetch(url, { method: "POST", body: JSON.stringify(arg) }).then((res) => res.json());
}

export const useRegisterPhoto = (req: PhotoRequest) => {
  fetch(API_EP+'/api/photos', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(req)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

export const useListPhotos = (): PhotosResponse => {
  const { data, error, isLoading }: {data: {id: string, src: string, spot: string, createdAt: string}[] | [], error: boolean, isLoading: boolean} = useSWR(API_EP+'/api/photos', fetcher)
 
  if (error) return {isLoading: false, error: true, data: []}
  if (isLoading) return {isLoading: true, error: false, data: []}
  return {isLoading: false, error: false, data: data}
}