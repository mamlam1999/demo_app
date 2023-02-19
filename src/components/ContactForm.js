import '../Style/ContactForm.css'

import React from 'react';

const ContactForm = () => {
    return (
        <div className='contact'>
            <form name='' method='POST' className='contact_form'>
                <p>
                <label for="nom">
                    Nom <input type="text" name="nom"/>
                </label>
                </p>

                <p>
                <label for="prenom">
                    Prenom<input type="text" name="prenom"/>
                </label>
                </p>

                <p>
                <label for="contact">
                    Contact<input type="text" name="contact"/>
                </label>
                </p>
                
                <p>
                <label for="adresse">
                    Adresse<input type="text" name="adresse"/>
                </label>
                </p>
                <button type="submit" value="Envoyer">Envoyer</button>
            </form>
        </div>
    );
}

export default ContactForm;
