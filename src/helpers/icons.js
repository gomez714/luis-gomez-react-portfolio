import { faTrash, faSignOutAlt, faEdit, faMinusCircle, faSpinner, faPlusSquare, faEnvelope, faPhoneVolume, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
    return library.add(faTrash, faSignOutAlt, faEdit, faMinusCircle, faSpinner, faPlusSquare, faMapMarkedAlt, faEnvelope, faPhoneVolume);
};

export default Icons;
