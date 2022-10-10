import express from "express";

const router = express.Router();

// middleware
import { requireSignin, isAdmin } from "../middlewares";
// controllers
import {
  register,
  login,
  currentUser,
  forgotPassword,
  profileUpdate,
  findPeople,
  addFollower,
  userFollow,
  userFollowing,
  removeFollower,
  userUnfollow,
  searchUser,
  viewProfile,
  getUser,
  getInstructors,
  sendTestEmail,
} from "../controllers/auth";

router.post("/register", register);
router.post("/login", login);
router.get("/current-user", requireSignin, currentUser);
router.post("/forgot-password", forgotPassword);

router.put("/profile-update", requireSignin, profileUpdate);
router.get("/find-people", requireSignin, findPeople);
router.get("/view-profile", requireSignin, viewProfile);

router.put("/user-follow", requireSignin, addFollower, userFollow);
router.put("/user-unfollow", requireSignin, removeFollower, userUnfollow);
router.get("/user-following", requireSignin, userFollowing);

router.get("/search-user/:query", requireSignin, searchUser);
router.get("/user/:username", getUser);
router.get("/consultants", getInstructors);

router.get("/current-admin", requireSignin, isAdmin, currentUser);

module.exports = router;
