const { ref } = Vue;
import { useAddEventListener } from './event.js'
export function useMouse() {
    const x = ref(0);
    const y = ref(0);


    useAddEventListener(window, "mousemove", (event) => {
        x.value = event.pageX;
        y.value = event.pageY;
    })

    return {
        x, y
    }

}