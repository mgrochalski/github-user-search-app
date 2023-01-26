const getUser = async (userName) => {
    const response = await fetch('https://api.github.com/users/' + userName);
    if (!response.ok) {
        return null;
    }

    return response.json();
}

export {getUser}