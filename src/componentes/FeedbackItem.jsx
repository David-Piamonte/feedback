import { useState } from "react"

const FeedbackItem = () =>{
    //Estados: persisten informacion del ciclo de vida 
    // de un unico componente 

    //estados iniciales
    const [rating, setRating] = useState(2)
    const [text, setText] = useState("Mejorar Curso, mejores recursos")  
    const addNota=()=>{
        //cambiar estado a rating
        setRating((prev)=>{
            return prev + 1
        })
    }
    const restNota=()=>{
        //cambiar estado a rating
        setRating((prev)=>{
            return prev - 1
        })
    }
    return(
        <div className="card">
            <div className="num-display">
                { rating }
            </div>
            <div className="text-desplay">
                { text}
            </div>
            <button className="btn" onClick={addNota}>
                Sumar Nota
            </button>
            
            <button className="btn" onClick={restNota}>
                Restar Nota
            </button>
        </div>
    )
}

export default FeedbackItem