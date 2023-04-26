import Users from '../model/user';

//GET all users : http://localhost:3000/api/users
export async function getUsers(req, res) {
  try {
    const users = await Users.find({});

    if (!users) return res.status(404).json({ error: 'Data not Found' });
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: 'Error While GETTING Data' });
  }
}

//GET user : http://localhost:3000/api/users/[userId]
export async function getUser(req, res) {
  try {
    const { userId } = req.query;
    if (userId) {
      const user = await Users.findById(userId);
      res.status(200).json(user);
    }
    res.status(404).json({ error: 'User not Found' });
  } catch (error) {
    res.status(404).json({ error: 'Error While GETTING User' });
  }
}

//POST all users : http://localhost:3000/api/users

export async function postUser(req, res) {
  try {
    const formData = req.body;
    if (!formData) {
      return res.status(404).json({ error: 'Form data not present' });
    }
    Users.create(formData)
      .then((data) => {
        return res.status(200).json(data, console.log('user created'));
      })
      .catch((err) => res.status(500).json({ error: 'User not created' }));
  } catch (error) {
    res.status(404).json({ error: 'Error While POSTING Data' });
  }
}

//PUT user : http://localhost:3000/api/users/1

export async function updateUser(req, res) {
  try {
    const { userId } = req.query;
    const formData = req.body;

    if (userId && formData) {
      const user = await Users.findByIdAndUpdate(userId, formData);
      res.status(200).json(user, console.log('update completed'));
    }
    res.status(404).json({ error: 'User not selected' });
  } catch (error) {
    return res.status(404).json({ error: 'Error While PUTTING Data' });
  }
}

//Delete user : http://localhost:3000/api/users/1

export async function deleteUser(req, res) {
  try {
    const { userId } = req.query;
    if (userId) {
      const user = await Users.findByIdAndDelete(userId);
      res.status(200).json({ deleted: user, message: 'deleted' });
    }
    res.status(404).json({ error: 'user not found' });
  } catch (error) {
    return res.status(404).json({ error: 'Error While DELETING Data' });
  }
}
