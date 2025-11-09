import fs from "fs-extra";
import path from "path";
import { logger, renderPlaceholder } from "../utils/index.js";

const template = `import HttpClient from "@/libs/interceptors";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { IBuilder, IService } from "@/libs/redux/types";

const initialState = {
  method: {
      isLoading: false,
      data:null,
   },
};

class {{PlaceHolder}}Service implements IService {
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
      reducer(builder: IBuilder<typeof initialState>) {
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
      name: "{{PlaceHolder}}Service",
      initialState,
      reducers: {},
      extraReducers: (builder) => {
         this.method.reducer(builder);
      },
   });
   reducer = this.slice.reducer;
   actions = this.slice.actions;
}

const object = new {{PlaceHolder}}Service(new HttpClient());
export const {{placeHolder}}Reducer = object.reducer;
export const {{placeHolder}}Actions = object.actions;
export const {{placeHolder}}Service = object as Omit<typeof object, "reducer" | "actions">;`;

export default async function Service(name) {
   const isValidName = /^[a-z]+(-[a-z]+)*$/.test(name);
   if (!isValidName) {
      logger.error(`❌ Invalid Service name: "${name}"\n` + "Service names must be lowercase and may include hyphens (e.g. user, user-list).");
      process.exit(1);
   }
   const dir = path.join(process.cwd(), "");
   await fs.mkdirp(dir);
   const filePath = path.join(dir, `${name}.service.ts`);

   await fs.writeFile(filePath, renderPlaceholder({ template: template, input: name }));
   logger.success(`✅ Service : ./${name}.service.ts created`);
}
