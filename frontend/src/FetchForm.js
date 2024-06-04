
import axios from 'axios';

const addForm = (name, email, message ) => {
    axios.post('http://localhost:8000/saveForm', {
        name, email, message
    })
    
}

export {addForm};



