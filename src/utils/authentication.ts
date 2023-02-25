import axios from "axios"

//gets the user data from mock api and checks if any of the users match than returns appropiate code
export const login = async (loginData: { email: string; password: string }) => {
  try {
    const resp = await axios.get(
      "https://63f9e6d5897af748dcc55333.mockapi.io/login"
    );
    const findUser = await resp.data?.filter(
      (user: { email: string; password: string }) => {
        return (
          user.email === loginData.email && user.password === loginData.password
        );
      }
    );

    if (findUser.length > 0) {
      localStorage.setItem("userData", JSON.stringify(findUser[0]));
      return 200;
    } else {
      return 400;
    }
  } catch (err) {
    return 400;
  }
};

//gets the user data from mock api and checks if any of the users match returns appropiate codes
export const register = async (registerData: {
  nameSurname: string;
  email: string;
  password: string;
}) => {
  try {
    const loginResp = await axios.get(
      "https://63f9e6d5897af748dcc55333.mockapi.io/login"
    );
    const findUser = await loginResp.data?.filter(
      (user: { nameSurname: string; email: string; password: string }) => {
        return user.email === registerData.email;
      }
    );

    if (findUser.length > 0) {
      return 401;
    } else {
      try {
        await axios.post(
          "https://63f9e6d5897af748dcc55333.mockapi.io/login",
          registerData
        );
        return 200;
      } catch (error) {
        return 400;
      }
    }
  } catch (error) {
    return 400;
  }
};

//deletes the localy stored data to logout and returns 200
export const logout = async () => {
  localStorage.removeItem("userData");
  return 200;
};

//checks if locally stored data available or not, if available returns the data
export const checkAuth = async () => {
  const getUserData = localStorage.getItem("userData");
  if (getUserData !== null) {
    return JSON.parse(getUserData);
  } else {
    return null;
  }
};
