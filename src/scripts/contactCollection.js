const API = "http://localhost:8088/contacts";

const contactInfo = {
  gatherInfo: () => {
    return fetch(API).then(contacts => contacts.json());
  },
  saveInfo: obj => {
    return fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    }).then(res => res.json());
  }
};

export default contactInfo;
