import HttpClient from "@/interceptors";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { BuilderType } from "@/libs/redux/types";

const initialState = {
   method: {
      isLoading: false,
      data: null,
   },
};

class PlaceHolderService {
   constructor(private http: HttpClient) {}

   method = {
      api: createAsyncThunk("method", async (body, thunkAPI) => {
         try {
            const { data } = await this.http.public.post("/endpoint", body);
            return data;
         } catch (error) {
            return thunkAPI.rejectWithValue(error);
         }
      }),
      reducer(builder: BuilderType<typeof initialState>) {
         builder.addCase(this.api.pending, (state) => {
            state.method.isLoading = true;
         });
         builder.addCase(this.api.fulfilled, (state, action) => {
            state.method.isLoading = false;
            state.method.data = action.payload;
         });
         builder.addCase(this.api.rejected, (state) => {
            state.method.isLoading = false;
            state.method.data = null;
         });
      },
   };

   private slice = createSlice({
      name: "PlaceHolderService",
      initialState,
      reducers: {},
      extraReducers: (builder) => {
         this.method.reducer(builder);
      },
   });
   reducer = this.slice.reducer;
   actions = this.slice.actions;
}

const object = new PlaceHolderService(new HttpClient());
export const placeHolderReducer = object.reducer;
export const placeHolderActions = object.actions;
export const placeHolderService = object as Omit<typeof object, "reducer" | "actions">;
