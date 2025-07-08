import { ref, onMounted, onUnmounted } from 'vue'

export default function useInView(targetRef) {
  const isVisible = ref(false)

  let observer

  const callback = (entries) => {
    if (entries[0].isIntersecting) {
      isVisible.value = true
      observer.disconnect() // Remove observer after first reveal
    }
  }

  onMounted(() => {
    observer = new IntersectionObserver(callback, { threshold: 0.2 })
    if (targetRef.value) {
      observer.observe(targetRef.value)
    }
  })

  onUnmounted(() => {
    if (observer && targetRef.value) {
      observer.unobserve(targetRef.value)
    }
  })

  return isVisible
}