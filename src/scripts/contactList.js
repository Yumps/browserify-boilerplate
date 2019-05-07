import contactDOM from "./contact";
import contactData from "./contactCollection";

export default function() {
  contactData.gatherInfo().then(info => {
    info.forEach(data => {
      contactDOM(data);
    });
  });
}
