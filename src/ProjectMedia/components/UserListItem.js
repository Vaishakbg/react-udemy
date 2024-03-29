import { useThunk } from "../hooks/use-thunk";
import { removeUser } from "../store";
import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

function UserListItem({ user }) {
  const [doremoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = () => {
    doremoveUser(user);
  };
  const header = (
    <>
      <Button loading={isLoading} onClick={handleClick} className="mr-3" danger>
        <GoTrashcan />
      </Button>
      {error && <div>Error deleteing user</div>}
      {user.name}
    </>
  );

  return <ExpandablePanel header={header}>
    <AlbumsList user={user} />
  </ExpandablePanel>;
}

export default UserListItem;
