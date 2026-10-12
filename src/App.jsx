import './App.css'
import { useState, useEffect } from 'react'
import { index, create } from './services/petService'
import PetList from './components/PetList'
import PetDetail from './components/PetDetail'
import PetForm from './components/PetForm'

function App() {
    const [petList, setPetList] = useState([])
    const [selected, setSelected] = useState(null)
    const [isFormOpen, setIsFormOpen] = useState(false)

    const updateSelected = (pet) => {
        setSelected(pet)
    }
    
    const handleFormView = () => {
        setIsFormOpen(!isFormOpen)
    }
    
    const handleAddPet = async formData => {
        try {
            const newPet = await create(formData)

            if (newPet.error){
                throw new Error(newPet.error)
            }

            setPetList([...petList, newPet])
            setIsFormOpen(false);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        const fetchPets = async () => {
            try {
                const pets = await index()

                if (pets.error) {
                    throw new Error(pets.error)
                }
                setPetList(pets)
            } catch (error) {
                console.error(error)
            }
        }
        fetchPets()
    }, [])

    return (
        <>
            <h1>Pet Shop</h1>
            <div>
                <PetList pets={petList} updateSelected={updateSelected} handleFormView={handleFormView} isFormOpen={isFormOpen} />
                {
                    isFormOpen ? (
                        <PetForm handleAddPet={handleAddPet} />
                    ) : (
                        <PetDetail selected={selected} />
                    )
                }
            </div>
        </>
    )
}

export default App
