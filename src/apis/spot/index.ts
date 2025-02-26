import useSWR from 'swr'
import { fetcher } from '@/utils/swr'
import { API_EP } from '@/utils/constants/common'

type SpotsResponse = {
    isLoading: boolean
    error: boolean
    data : {
        name: string
        createdAt: string
    }[] | []
}

export const useListSpots = (): SpotsResponse => {
  const { data, error, isLoading }: {data: {name: string, createdAt: string}[] | [], error: boolean, isLoading: boolean} = useSWR(API_EP+'/api/spots', fetcher, { refreshInterval: 15000 })
 
  if (error) return {isLoading: false, error: true, data: []}
  if (isLoading) return {isLoading: true, error: false, data: []}
  return {isLoading: false, error: false, data: data}
}