import { useQuery } from '@tanstack/react-query';

import { UsersService } from '@/services';

export const useQueryUsers = () => {
  return useQuery(['users'], () =>
    UsersService.getUsers().then((res) => res.data)
  );
};
