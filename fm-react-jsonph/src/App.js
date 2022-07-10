import axios from "axios";
import { useState, useEffect, createContext } from "react";
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Loading from "./Component/Loading";
import Users from "./Component/Users";
import Address from "./Component/Address";
import Company from "./Component/Company";
import Posts from "./Component/Posts";

export const AppContext = createContext(null);

function App() {
  const REACT_APP_API = 'https://jsonplaceholder.typicode.com/';
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [postsByUser, setPostsByUser] = useState([]);
  const [address, setAddress] = useState({});
  const [company, setCompany] = useState({});
  let navigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      const result = await fetchUsers()
      setUsers(result.data);
    }
    getUsers()
  }, [users])

  const fetchUsers = async () => {
    const res = await axios.get(REACT_APP_API + 'users');
    return res;
  }

  useEffect(() => {
    const getPosts = async () => {
      const result = await fetchPosts()
      setPosts(result.data);
    }
    getPosts()
  }, [posts])

  const fetchPosts = async () => {
    const res = await axios.get(REACT_APP_API + 'posts');
    return res;
  }

  const tranferToAddress = (a) => {
    setAddress(a.address);
    navigate('/Address');
  }

  const tranferToCompany = (c) => {
    setCompany(c.company);
    navigate('/Company');
  }

  const tranferToPost = (userId) => {
    setPostsByUser(posts.filter((p) => { return p.userId == userId.userId }));
    navigate('/Posts');
  }

  return (
    <div className="container">
      <AppContext.Provider value={{ users, address, company, postsByUser, tranferToAddress, tranferToCompany, tranferToPost }}>
        <Routes>
          <Route path="/" element={
            <>
              {users.length > 0 ? <Users /> : <Loading />}
            </>
          } />
          <Route path='/Address' element={<Address />} />
          <Route path='/Company' element={<Company />} />
          <Route path='/Posts' element={<Posts />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
