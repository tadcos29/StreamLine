import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../../../../utils/mutations';
import { QUERY_USER } from '../../../../utils/queries';

function AccessCode({ user }) {
const [accessKey, setAccessKey] = useState('');
const [error, setError] = useState('');
const [updateUser] = useMutation(UPDATE_USER, {
    refetchQueries: [{ query: QUERY_USER }],
  }); // here

const handleSubmit = async (e) => {
e.preventDefault();
if (user.accessKeys && user.accessKeys.includes(accessKey)) {
setError('Access key already exists');
return;
}
const updatedUser = { ...user, accessKeys: [...user.accessKeys, accessKey] };
console.log('inaccesskeybrowser');
console.log(updatedUser);
try {
await updateUser({ variables: { accessKeys:updatedUser.accessKeys } });
setAccessKey('');
setError('');
} catch (err) {
setError('An error occurred while updating the user');
}
};

const handleChange = (e) => {
setAccessKey(e.target.value);
setError('');
};

return (
<form onSubmit={handleSubmit}>
<label htmlFor="access-key">Enter Access Key:</label>
<input
     type="text"
     id="access-key"
     name="access-key"
     value={accessKey}
     onChange={handleChange}
   />
{error && <div>{error}</div>}
<button type="submit">Add Access Key</button>
</form>
);
}

export default AccessCode;
