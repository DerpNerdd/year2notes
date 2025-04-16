interface Contact {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
    isFavorite: boolean;
  }
  
  interface WorkContact extends Contact {
    department: string;
  }
  
  interface PersonalContact extends Contact {
    birthday: string; 
  }
  
  class ContactManager {
    private contacts: Contact[] = [];
    private nextId: number = 1;
  
    constructor(initialContacts?: Contact[]) {
      if (initialContacts) {
        this.contacts = initialContacts;
        const maxId = Math.max(...initialContacts.map(contact => contact.id));
        this.nextId = maxId + 1;
      }
    }
  
    /**
     * @param name - The name of the contact.
     * @param email - The email address of the contact.
     * @param phoneNumber - The phone number of the contact.
     * @param isFavorite - Indicates if the contact is a favorite.
     * @returns The newly created contact object.
     */

    addContact(name: string, email: string, phoneNumber: string, isFavorite: boolean): Contact {
      const newContact: Contact = {
        id: this.nextId++,
        name,
        email,
        phoneNumber,
        isFavorite,
      };
      this.contacts.push(newContact);
      return newContact;
    }
  
    /**
     * Deletes a contact based on its id.
     * @param id - The unique identifier of the contact to delete.
     */
    deleteContact(id: number): void {
      this.contacts = this.contacts.filter(contact => contact.id !== id);
    }

    displayContacts(): void {
      console.log("Contact List:");
      console.log("-------------");
      this.contacts.forEach(contact => {
        // Append a star for favorites
        const favoriteMark = contact.isFavorite ? ' ⭐' : '';
        console.log(`ID: ${contact.id} | Name: ${contact.name}${favoriteMark}`);
        console.log(`Email: ${contact.email}`);
        console.log(`Phone: ${contact.phoneNumber}`);
        console.log("---------------------");
      });
    }
  
    /**
     * Searches for contacts by name or email.
     * @param query - A search string to match against contact names and emails.
     * @returns An array of contacts matching the search criteria.
     */
    searchContacts(query: string): Contact[] {
      const lowerCaseQuery = query.toLowerCase();
      return this.contacts.filter(contact =>
        contact.name.toLowerCase().includes(lowerCaseQuery) ||
        contact.email.toLowerCase().includes(lowerCaseQuery)
      );
    }
  }
  

  const contactManager = new ContactManager();
  
  contactManager.addContact("Alan Sanchez", "sanchez1.alan1@gmail.com", "123-456-7890", true);
  contactManager.addContact("Daniel Freeman", "dfree356@gmail.com", "987-654-3210", false);
  contactManager.addContact("Sabrina Shafer", "sabrina@shafer.com", "555-123-4567", true);
  
  contactManager.displayContacts();
  

  contactManager.deleteContact(2);
  console.log("\nAfter Deletion:");
  contactManager.displayContacts();

  const searchResults = contactManager.searchContacts("Alan");
  console.log("\nSearch Results:");
  console.log(searchResults);
  