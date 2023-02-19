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
        <Button loading={isLoading} onClick={handleClick}>
            <GoTrashcan />
        </Button>
        {error && <div>Error deleteing user</div>}
        {user.name}
      </div>
    </div>
  );
}

export default UserListItem;
