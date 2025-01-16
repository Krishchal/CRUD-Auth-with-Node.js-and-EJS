import UserModel from "../models/User.js";

//Fetching all registerd users
export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find({}, "name email");
    res.status(200).json({
      message: "Users fetched successfully",
      success: true,
      users,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

//Deleting users by email
export const deleteUser = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await UserModel.findOneAndDelete({ email });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    res.status(200).json({
      message: "User deleted successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};
