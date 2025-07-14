import User from "../../models/User.js";
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password"); // exclude password
        res.status(200).json({
            status: "success",
            data: users,
        });
    } catch (err) {
        console.error("Error fetching users:", err);
        res.status(500).json({
            status: "error",
            message: "Failed to fetch users",
        });
    }
};