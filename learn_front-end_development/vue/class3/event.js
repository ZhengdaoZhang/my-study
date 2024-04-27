const { onMounted, onUnmounted } = Vue;
export function useAddEventListener(target, event, callback) {
    onMounted(() => {
        target.addEventListener(event, callback);
    })
    onUnmounted(() => {
        target.removeEventListener(event, callback);
    })
}