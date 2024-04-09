import { useSelector } from 'react-redux';
import type { RootState } from '../store';

const useAppSelector = <Return>(callback: (state: RootState) => Return) => {
  return useSelector((state: RootState) => callback(state));
};

export default useAppSelector;
