import LocalizedStrings from "react-localization";

let strings = new LocalizedStrings({
  fr: {
    createCustomer: "Creation de client",
    title: "Titre",
    firstName: "Prenom",
    lastName: "Nom",
    emailAddress: "Adresse Mail",
    userInfo: "Infos Client",
    middleName: "Deuxieme Prenom",
    secondLastName: "Deuxieme Nom",
    phoneNumber: "Numero Tel",
    dateOfBirth: "Date de Naissance",
    language: "Language",
    gender: "Sexe"
  },
  en: {
    createCustomer: "Create Customer",
    title: "Title",
    firstName: "First Name",
    lastName: "Last Name",
    emailAddress: "Email Address",
    userInfo: "User Info",
    middleName: "Middle Name",
    secondLastName: "Second Last Name",
    phoneNumber: "Phone Number",
    dateOfBirth: "Date Of Birth",
    language: "Language",
    gender: "Gender"
  }
});

export default strings;
