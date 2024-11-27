import style from './LandingPage.module.css'
import ChatDialog from '../../components/ChatDialog/ChatDialog';


const LandingPage = () => {
    return(
        <div className={style.container}>
            {/* <UploadComponent sendData={sendData}/> */}
            <ChatDialog />
        </div>
    )
}

export { LandingPage };