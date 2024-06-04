
import { addForm } from './FetchForm';

const Form = ({ 
    name, setName, email, setEmail,
    message, setMessage,
    }) => {

    return (
        <div>
                    <form>
                        <h3>Form</h3>

                        <div>
                        <label>Your name..</label>
                                <input 
                                value={ name } 
                                onChange={(e) => setName(e.target.value)} 
                                type="text" placeholder="Your name" />
                        </div>

                        <div>
                        <label>Your email...</label>
                                <input 
                                value={ email } 
                                onChange={(e) => setEmail(e.target.value)} 
                                type="text" placeholder="mail@gmail.com" />
                                
                        </div>

                        <div>
                        <label>Your message..</label>
                                <textarea 
                                value={message} 
                                onChange={(e) => setMessage(e.target.value)} />
                        </div>    
                        
                        <div>
                            
                        </div>

                    </form>
                    <button
                                disabled ={ !name || !email  || !message }
                                onClick = { () => addForm(name, email, message) } >
                                Send
                            </button>
                </div>
        
    )
}
export default Form;