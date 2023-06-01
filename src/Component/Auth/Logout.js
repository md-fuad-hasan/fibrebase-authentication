import { useDispatch} from "react-redux";
import { logout } from "../../redux/actionCreators";

const Logout = ()=>{
    const dispatch = useDispatch();
    dispatch(logout());
    return(
        <div>

        </div>
    )
}

export default (Logout);