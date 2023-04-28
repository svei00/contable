import { userState } from 'reat';
import axios from 'axios'

export default function Home ({ users }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [newUser, setNewUser] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await axios.post('/api/users', { name, email});

        setNewUser(response.data);
        setName('');
        setEmail('');
    };

    return (
        <div>
            <h1>Users</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder='Name'
                />

                <input
                    type='text'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder='Email'
                />

                <button type='submit'>Create User</button>

            </form>

            {newUser && (
                <p>
                    Created user with Name {newUser.name} and email {newUser.email}
                </p>
            )}

        </div>
    )
}