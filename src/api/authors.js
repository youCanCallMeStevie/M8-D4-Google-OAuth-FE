const { REACT_APP_BE_URL } = process.env;

export const login = async (credentials) => {
try {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const response = await fetch(`${REACT_APP_BE_URL}/login`,{
            method: "POST",
            headers: myHeaders,
            body: 
            JSON.stringify(credentials),
        })
    } catch (error) {
        console.log(error)
        return error
    }
};

export const register = async (user) => {
    try {
        const response = await fetch(`${REACT_APP_BE_URL}/register`,{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user)
        }),
    } catch (error) {
        console.log(error)
        return error
    }
};