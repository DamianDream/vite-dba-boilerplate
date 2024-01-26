// Function return object with form data

export const getFormData = (formSelectorID) => {
    const data = {}

    try {
        //  Select form node
        const form = document.querySelector(formSelectorID);
        const formData = new FormData(form)

        // Iterate via form object
        for(let [key, value] of formData) {
            if(value !== '') {
                data[key] = value.trim()
            }
        }
        
    } catch (error) {
        console.error(`Error during iterate (selector: ${formSelectorID}) object: `, error);
    }

    return data
}
