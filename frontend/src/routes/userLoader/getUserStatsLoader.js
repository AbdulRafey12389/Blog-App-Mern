import { getUserStats } from '@/api/user';

const getUserStatsLoaderFunction = async () => {
  try {
    const res = await getUserStats();

    return res;
  } catch (error) {
    console.error(error);
  }
};

export default getUserStatsLoaderFunction;
