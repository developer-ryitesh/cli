import InterceptorBuilder from "@retork/interceptor";
import axios from "axios";
import LoadingInterceptor from "./loading.interceptor";

export default class HttpClient {
   private instance = axios.create({
      baseURL: "http://localhost:8000/api/v1",
      headers: {},
      withCredentials: true,
   });

   get private() {
      return new InterceptorBuilder(this.instance) //
         .use(LoadingInterceptor)
         .build();
   }

   get public() {
      return new InterceptorBuilder(this.instance) //
         .use(LoadingInterceptor)
         .build();
   }
}
