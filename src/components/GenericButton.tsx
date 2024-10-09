import React from 'react'
import { Mail } from 'lucide-react'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from '../logicComponents/notification';


interface Props {
    mail: string;
    ButtonText: string; 
}

export const GenericButton: React.FC<Props> = ({ mail, ButtonText }) => {
    return (
        <div>
            <a href={mail} onClick={notify} className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 hover:scale-110 shadow-lg hover:shadow-blue-500 transition-transform duration-300 text-center items-center justify-center">
                <Mail className="h-5 w-5 inline-block mr-2 " />
                {ButtonText}
            </a>
            <ToastContainer />
        </div> 
    )
}

export default GenericButton