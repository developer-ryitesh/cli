import InterceptorBuilder from "@retork/interceptor";
import axios from "axios";
import LoadingInterceptor from "./loading.interceptor";
import ErrorInterceptor from "./error.interceptor";

export default class HttpClient {
   private instance = axios.create({
      baseURL: "/api/v1",
      headers: {},
      withCredentials: true,
   });

   get private() {
      return new InterceptorBuilder(this.instance) //
         .use(LoadingInterceptor)
         .use(ErrorInterceptor)
         .build();
   }

   get public() {
      return new InterceptorBuilder(this.instance) //
         .use(LoadingInterceptor)
         .use(ErrorInterceptor)
         .build();
   }
}
