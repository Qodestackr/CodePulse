 // Get the Firebase UID from the request headers
//  const firebaseUID = req.headers.authorization.split("Bearer ")[1]

// // Get the code and language from the request body
//   const { code, language } = req.body;

/**
 * 
 *   // Save the code to the User model
  try {
    const user = await User.findOneAndUpdate(
      { firebaseUID },
      { code, language },
      { upsert: true, new: true }
    );

    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving code");
  }
 */