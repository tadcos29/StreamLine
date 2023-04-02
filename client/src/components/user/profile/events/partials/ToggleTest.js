import { useMutation } from '@apollo/client';
import { TOGGLE_EVENT } from '../../../../../utils/mutations'

const ToggleTest = ({ _id, name, isLive }) => {
  const [toggleEvent] = useMutation(TOGGLE_EVENT, {
    variables: { _id: _id, isLive: !isLive }
  });

  const handleToggle = () => {
    toggleEvent();
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>{isLive ? 'Live' : 'Not Live'}</p>
      <button onClick={handleToggle}>Toggle Live</button>
    </div>
  );
};

export default ToggleTest;