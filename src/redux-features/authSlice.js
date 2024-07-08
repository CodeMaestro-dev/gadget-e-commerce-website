import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import auth from "../assets/auth/firebase.config";
import { setLoading } from "./loadingSlice";

export const signup = createAsyncThunk(
  "auth/signup",
  async ({ email, password }) => {
    await createUserWithEmailAndPassword(auth, email, password);
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res.user;
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await signOut(auth);
});

export const listenAuthState = createAsyncThunk(
  "auth/listenAuthState",
  async (_, { dispatch }) => {
    // using a promise to make sure the laoding state takes of when the user is resolved.
    return new Promise((resolve) => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(setUser(JSON.stringify(user)));
          localStorage.setItem("dr_3ej-78", JSON.stringify(user));
        } else {
          dispatch(clearUser());
          localStorage.removeItem("dr_3ej-78");
        }
        dispatch(setLoading(false));
        resolve(user);
      });
    });
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    status: "idle",
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // signup
      .addCase(signup.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // login
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // logout
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      })
      // listenAuthState
      .addCase(listenAuthState.pending, (state) => {
        state.status = "loading";
      })
      .addCase(listenAuthState.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(listenAuthState.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
