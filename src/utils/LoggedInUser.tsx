import { jwtDecode, JwtPayload  } from "jwt-decode";

// Define a custom interface for the decoded token payload
interface DecodedToken extends JwtPayload {
  id: string; // Add the properties you expect in the JWT
  exp?: number; // Optional expiration time
}

export default function LoggedInUser() {
  const loadedToken = localStorage.getItem('token');
  console.log('Loaded token >>> LoggedInUser(): ', loadedToken);

  if (!loadedToken) {
    return null; // Return null if token is not present
  }

  try {
    // Decode the token and cast it to the custom interface
    const decoded = jwtDecode<DecodedToken>(loadedToken); 
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
