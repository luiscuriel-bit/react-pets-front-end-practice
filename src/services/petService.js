const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`

const index = async () => {
    try {
        const response = await fetch(BASE_URL)
        const pets = await response.json()
        return pets
    } catch (error) {
        console.error(error)
    }
}

const create = async formData => {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

export {
    index,
    create,
}