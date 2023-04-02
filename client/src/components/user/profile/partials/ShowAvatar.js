
import { avatarImage } from '../../../../utils/helpers'

function ShowAvatar({user, style}) {

    if ((user.avatar) && (user.avatar!=='')) {
    return (<img src={avatarImage(user.avatar)} alt="Uploaded avatar" style={style} />)
} else {
    return null;
}
}


export default ShowAvatar;