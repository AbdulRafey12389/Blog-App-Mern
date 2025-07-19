import { getUserStats } from '@/api/user';

const getUserStatsLoaderFunction = async () => {
  try {
    const res = await getUserStats();

    console.log(res);

    return res;
  } catch (error) {
    console.error(error);
  }
};

export default getUserStatsLoaderFunction;
