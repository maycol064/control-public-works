import { logout, selectAuth } from "@/store/auth/slice";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";
import { useRouter } from "next/router";

export const useNavbar = () => {
  const dispatch = useAppDispatch();
  const { role } = useAppSelector(selectAuth);
  const { push } = useRouter();

  const handleLogout = () => {
    dispatch(
      logout({
        status: 'not-authenticated',
        name: null,
        id: null,
        username: null,
        token: null,
        role: null,
      })
    );
    push('/auth');
  };

  return {
    handleLogout,
    role
  }
}
