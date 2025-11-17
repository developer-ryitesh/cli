import type { Interceptor, Req, Res, Instance } from "@retork/interceptor";

export default class PlaceHolderInterceptor implements Interceptor {
   public instance: Instance;

   constructor(instance: Instance) {
      this.instance = instance;
   }

   intercept(req: Req, res: Res): Instance {
      req.use(
         (config) => {
            console.log("Request interceptor");
            return config;
         },
         (error) => Promise.reject(error)
      );

      res.use(
         (response) => {
            console.log("Response interceptor");
            return response;
         },
         (error) => Promise.reject(error)
      );

      return this.instance;
   }
}