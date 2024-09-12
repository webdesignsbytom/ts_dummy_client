import { jwtDecode } from "jwt-decode";

export default function LoggedInUser() {
  const loadedToken = localStorage.getItem('token');
  console.log('Loaded token >>> LoggedInUser(): ', loadedToken);

  if (!loadedToken) {
    return null; // Return null if token is not present
  }

  try {
    // Decode the token
    const decoded = jwtDecode(loadedToken);
    console.log('Decoded >>> LoggedInUser(): ', decoded);

    // Optionally: check if token is expired
    if (decoded.exp && Date.now() >= decoded.exp * 1000) {
      console.warn('Token has expired');
      return null; // Token is expired
    }

    return decoded; // Return decoded token information
  } catch (error) {
    console.error('Error decoding token:', error);
    return null; // Return null in case of any decoding error
  }
}
