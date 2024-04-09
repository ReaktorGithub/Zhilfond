import useAppSelector from "./useAppSelector";
import useAppDispatch from "./useAppDispatch";
import {AxiosResponse} from "axios";
import {IUserResponse} from "../store/types";
import {httpClient} from "../client/httpClient";
import {ChangeEvent, useCallback, useEffect} from "react";
import {debounce} from "lodash";
import {setLoading, setSearch, setSearchParsed, setSelectedUserId, setUsers} from "../store/appSlice";
import searchUsers from "../utils/searchUsers";
import {enqueueSnackbar} from "notistack";
import {DEBOUNCE_TIME} from "../constants/constants";
import parseSearchString from "../utils/parseSearchString";

interface ISearchUsersReturn {
  onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void;
  onSelectUser: (id: string) => void;
}

const useSearchUsers = (): ISearchUsersReturn => {
  const searchParsed = useAppSelector(state => state.app.searchParsed);

  const dispatch = useAppDispatch();

  const getUsers = async (): Promise<AxiosResponse<IUserResponse[]>> => {
    return httpClient.get<IUserResponse[]>('/users');
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const startSearchDebounce = useCallback(debounce((searchData: string[]) => {
    if (!searchData.length) {
      dispatch(setUsers([]));
      dispatch(setLoading(false));
      return;
    }

    getUsers()
      .then((res) => {
        if (!res?.data) {
          dispatch(setUsers([]));
          return;
        }

        const foundUsers = searchUsers(res.data, searchData);
        if (foundUsers.length) {
          dispatch(setSelectedUserId(foundUsers[0].id));
        }
        dispatch(setUsers(foundUsers));
      })
      .catch((e) => {
        enqueueSnackbar('Упс! Что-то пошло не так', { variant: 'error' });
        console.log(e);
      })
      .finally(() => {
        dispatch(setLoading(false));
      })

  }, DEBOUNCE_TIME), []);

  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(setSelectedUserId(null));
    startSearchDebounce(searchParsed);
  }, [searchParsed, startSearchDebounce])

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setSearch(value));
    const parsed = parseSearchString(value);
    dispatch(setSearchParsed(parsed));
  }

  const onSelectUser = (id: string) => {
    dispatch(setSelectedUserId(id));
  }

  return {
    onChangeValue,
    onSelectUser,
  }
}

export default useSearchUsers;
