require("colors");
const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");

/*
 * Раскомментируй и запиши значение
 * const contactsPath = ;
 */

// TODO: задокументировать каждую функцию
async function listContacts() {
  try {
    const contactsJSON = await fs.readFile(contactsPath, "utf-8");
    console.log("contacts.json: ".yellow, contactsJSON.blue);

    const contacts = JSON.parse(contactsJSON);
    console.log("Список контактів:".yellow);
    console.table(contacts);

    return contacts;
  } catch (error) {
    console.error(error);
  }
}
listContacts();

async function getContactById(contactId) {
  const contacts = listContacts();

  const filterContacts = contacts.filter();
}

async function removeContact(contactId) {
  // ...твой код
}

async function addContact(name, email, phone) {
  // ...твой код
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
