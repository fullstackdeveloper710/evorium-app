import { createSlice } from "@reduxjs/toolkit";
import { getUserProgramList, userFilterPrograms } from "../../thunk/user/usrPrograms";

const initialState = {
  userFreePrograms: {
    data: [],
  },
  userPaidPrograms: {
    data: [],
  },

  userAZPrograms: {
    data: [],
  },
  userZAPrograms: {
    data: [],
  },
  userCategorynewPrograms: {
    data: [],
  },
  userCategoryproPrograms: {
    data: [],
  },
  userSpeakers1Programs: {
    data: [],
  },
  userSpeakers2Programs: {
    data: [],
  },
};

const userProgramsSlice = createSlice({
  name: "userProgramsSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get user program list
    builder
      .addCase(getUserProgramList.pending, (state) => {
        state.error = null;
        state.status = false;
      })
      .addCase(getUserProgramList.fulfilled, (state, action) => {
        const {
          meta: {
            arg: {
              values: { course_type },
            },
          },
          payload,
        } = action;
        if (course_type === "Free") {
          state.userFreePrograms = payload;
        } else {
          state.userPaidPrograms = payload;
        }
        state.status = true;
      })
      .addCase(getUserProgramList.rejected, (state, action) => {
        state.status = false;
      });


      // filter programs reducer


      builder
      .addCase(userFilterPrograms.pending, (state) => {
        state.error = null;
        state.status = false;
      })
      .addCase(userFilterPrograms.fulfilled, (state, action) => {
        const {
          meta: {
            arg: {
              values: { sort_by,
                categories,
                speakers },
            },
          },
          payload,
        } = action;
        if (sort_by === "az" ) {
          state.userAZPrograms = payload;
        } else {
          state.userZAPrograms = payload;
        }
        if (categories === "new") {
          state.userCategorynewPrograms = payload;
        } else {
          state.userCategoryproPrograms = payload;
        }

        if (speakers === "simpson") {
          state.userSpeakers1Programs = payload;
        } else {
          state.userSpeakers2Programs = payload;
        }
        state.status = true;
      })
      .addCase(userFilterPrograms.rejected, (state, action) => {
        state.status = false;
      });

  },
});

// export const {} = userProgramsSlice.actions;
export default userProgramsSlice.reducer;
