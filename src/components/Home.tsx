import { FC } from "react";
import { User } from "firebase/auth";
import useFirebaseConfig from "../Firebase/Firebase";

interface HomeProps {
  user: User;
}

const Home: FC<HomeProps> = ({ user }) => {
  const { auth } = useFirebaseConfig();

  const handleSignOut = () => {
    auth.signOut().catch((error) => {
      console.error("Error signing out:", error);
    });
  };

  return (
    <div className="home">
      <h1>
        Hello, <span>{user.displayName}</span>
      </h1>
      <img src={user.photoURL ?? ""} alt={user.displayName ?? ""} />
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
};

export default Home;
