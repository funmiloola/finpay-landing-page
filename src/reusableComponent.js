import { ref, onMounted, onUnmounted } from 'vue'

export function useInView(threshold = 0.5, rootMargin = '0px') {
  const elementRef = ref(null)
  const isVisible = ref(false)

  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            observer.unobserve(entry.target) // stop observing once visible
          }
        })
      },
      {
        threshold,
        rootMargin,
      }
    )

    if (elementRef.value) {
      observer.observe(elementRef.value)
    }
  })

  onUnmounted(() => {
    if (observer && elementRef.value) {
      observer.unobserve(elementRef.value)
    }
  })

  return {
    elementRef,
    isVisible,
  }
}
