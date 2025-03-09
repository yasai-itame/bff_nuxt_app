import type { UseFetchOptions } from "nuxt/app";

export function useApi() {
  const fetchApi = async<T> (url: string, options: UseFetchOptions<T> = {}) => {

    return await useFetch(url, {
      ...options,
      $fetch: useNuxtApp().$customFetch,
    })
  }
  return {
    fetchApi
  }
}