import { useThunk } from "../hooks/use-thunk";
import { removeUser } from "../store";
import { GoTrashcan } from 'react-icons/go';
import Button from "./Button";

function UserListItem({ user }) {
  const [doremoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = ()=> {
    doremoveUser(user);
  }

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <div className="flex flex-row items-center justify-between">
        <Button loading={isLoading} onClick={handleClick} className="mr-3" danger>
            <GoTrashcan />
        </Button>
        {error && <div>Error deleteing user</div>}
        {user.name}
        </div>
      </div>
    </div>
  );
}

export default UserListItem;
