import { USER_ACTION_TYPE } from "./user.types"
import { createAction } from "../../utils/reducer/createAction"

export  const setCurrentUser = (user) => createAction(USER_ACTION_TYPE.SET_CURRENT_USER, user)

export const CheckUserSession = () =>  createAction(USER_ACTION_TYPE.CHECK_USER_SESSION)

export const googleSignStart = () =>  createAction(USER_ACTION_TYPE.GOOGLE_SIGN_IN_START)

export const emailSignInStart =(email, password) => createAction(USER_ACTION_TYPE.EMAIL_SIGN_IN_START, {email , password})

export const signInSuccess = (user) => createAction(USER_ACTION_TYPE.SIGN_IN_SUCCESS, user)

export const signInFailed   = (error) => createAction(USER_ACTION_TYPE.SIGN_IN_FAILED, error)

export const signUpStart = (email, password, displayName) => createAction(USER_ACTION_TYPE.SIGN_UP_START, {email, password, displayName})
export const signUpSuccess = (user, additionalDetails) => createAction(USER_ACTION_TYPE.SIGN_UP_SUCCESS, {user, additionalDetails})

export const signUpFailed   = (error) => createAction(USER_ACTION_TYPE.SIGN_UP_FAILED, error)

export const signOutStart = () =>
  createAction(USER_ACTION_TYPE.SIGN_OUT_START);

export const signOutSuccess = () =>
  createAction(USER_ACTION_TYPE.SIGN_OUT_SUCCESS);

export const signOutFailed = (error) =>
  createAction(USER_ACTION_TYPE.SIGN_OUT_FAILED, error); 