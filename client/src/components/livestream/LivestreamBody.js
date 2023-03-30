import Logo from './partials/Logo'
import Player from './partials/Player'
import Title from './partials/Title'
import ViewCount from './partials/ViewCount'

const LivestreamBody = ({user}) => {


    return (
        <div className="container">
            <h2>
                This is the Livestream Body which has been called by the Livestream Component<p/>
                You are {user.firstName}. It hosts several components:</h2>
                <Title user={user}/>
                <Logo user={user}/>
                <Player user={user}/>
                <ViewCount user={user}/>
                </div>
      
          
         
     
      );
  };
  
  export default LivestreamBody;