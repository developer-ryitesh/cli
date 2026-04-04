export function withFormData(data: any) {
   const formData = new FormData();
   for (const key in data) {
      if (!Object.hasOwn(data, key)) continue;
      const element = data[key];
      if (element) {
         formData.append(key, element);
      }
   }
   return formData;
}
