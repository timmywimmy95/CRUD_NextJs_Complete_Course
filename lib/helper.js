const BASE_URL = 'http://localhost:3000/';

//Return All Users
export const getUsers = async () => {
  const res = await fetch(`${BASE_URL}/api/users`);
  const data = await res.json();
  return data;
};

//Return Single User
export const getUser = async (userId) => {
  const response = await fetch(`${BASE_URL}/api/users/${userId}`);
  const data = await res.json();
  if (data) return data;
  return {};
};

//Posting a new user
export async function addUser(formData) {
  try {
    const Options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        body: JSON.stringify(formData),
      },
    };
    const res = await fetch(`${BASE_URL}/api/users`, Options);
    const data = await res.json();
  } catch (error) {
    return error;
  }
}

//Update a new user
export async function updateUser(userId, formData) {
  try {
    const Options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        body: JSON.stringify(formData),
      },
    };
    const res = await fetch(`${BASE_URL}/api/users/${userId}`, Options);
    const data = await res.json();
  } catch (error) {
    return error;
  }
}

//Delete a User
export async function deleteUser(userId) {
  try {
    const Options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        body: JSON.stringify(formData),
      },
    };
    const res = await fetch(`${BASE_URL}/api/users/${userId}`, Options);
    const data = await res.json();
  } catch (error) {
    return error;
  }
}
