import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
    
const generateContacts = async (number) => {
    const contacts = await readContacts();
    
    const newContacts = [];
    for (let i = 0; i < number; i++) {
        const contact = createFakeContact();
        newContacts.push(contact);
    }

    const updatedContacts = [...contacts, ...newContacts];

    return writeContacts(updatedContacts);
};

generateContacts(5);
