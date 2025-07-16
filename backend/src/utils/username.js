// GENERATE A RANDOM USERNAME LIKE (E.G USER-ABC)...
export const generateUsername = () => {
    const usernamePrefix = 'user-';
    const randomChar = Math.random().toString(36).slice(2);

    const username = usernamePrefix + randomChar;

    return username;
};