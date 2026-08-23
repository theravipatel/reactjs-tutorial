import { useState } from "react";

function useToggle(initialValue = false) {
    const [value, setValue] = useState(initialValue);

    function toggleValue(newVal) {
        if (typeof newVal !== "boolean") {
            // If we are not passing the value when we use this custom hook then toggle the initial value
            setValue(!value);
        } else {
            // If we are passing the value when we use this custom hook then set passed value
            setValue(newVal);
        }
    }

    return [value, toggleValue];
}

export default useToggle;