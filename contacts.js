require("colors");
const fs = require("fs").promises;
const { nanoid } = require("nanoid");
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");

async function readContacts() {
  const contactsJSON = await fs.readFile(contactsPath, "utf-8");
  const contacts = JSON.parse(contactsJSON);
  return contacts;
}

async function writeContacts(contacts) {
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
}

async function listContacts() {
  try {
    const contacts = await readContacts();

    console.table(contacts);

    return contacts;
  } catch (error) {
    console.error(error);
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await readContacts();

    const filterContacts = contacts.filter(
      (contact) => String(contact.id) === String(contactId)
    );

    if (filterContacts.length === 0) {
      return console.log("Нет контакта с таким ID:".yellow, contactId.red);
    }

    console.table(filterContacts);
  } catch (error) {
    console.error(error);
  }
}

async function removeContact(contactId) {
  const contacts = await readContacts();
  const updateContacts = contacts.filter(
    (contact) => String(contact.id) !== String(contactId)
  );

  const findId = contacts.find((contact) => contact.id === contactId);

  if (!findId) {
    return console.log("Нет контакта с таким ID:".yellow, contactId.red);
  }

  await getContactById(contactId);

  await writeContacts(updateContacts);
}

async function addContact(name, email, phone) {
  const contacts = await readContacts();
  const id = nanoid();
  const newContact = { id, name, email, phone };

  console.table(newContact);

  const newContactsList = [...contacts, newContact];
  await writeContacts(newContactsList);
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
