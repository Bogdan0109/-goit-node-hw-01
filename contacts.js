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
    const contacts = await fs.readFile(contactsPath, "utf-8");
    console.log("contacts.json: ".yellow, contacts.blue);

    const contactsParse = JSON.parse(contacts);
    console.log("СПИСОК КОНТАКТОВ:".yellow);
    console.table(contactsParse);

    return contactsParse;
  } catch (error) {
    console.error(error);
  }
}
listContacts();

async function getContactById(contactId) {
  const contactsParse = listContacts();
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
