import { ref } from 'vue'

export function useFetch<T>() {
  const data = ref<T | null>(null)
  const error = ref<unknown>(null)
  const loading = ref<boolean>(true)

  fetch('data.json')
    .then((res) => res.json())
    .then((json: T) => {
      data.value = json
      loading.value = false
    })
    .catch((err) => {
      error.value = err
      loading.value = false
    })

  return { data, error, loading }
}
