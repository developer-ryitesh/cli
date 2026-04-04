import { ErrorFormik } from "@/libs/formik/components";
import { GrCloudUpload } from "react-icons/gr";
import { MdFileUpload } from "react-icons/md";

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
   label?: string;
   formikError?: boolean;
};
export function FileField({ label = "Browser File", formikError = false, hidden, ...props }: Props) {
   return (
      <div>
         <div className="flex flex-col items-center justify-center bg-gray-50 py-3 rounded-sm border border-gray-200">
            <GrCloudUpload size={30} strokeWidth={1} className="mb-2" />
            {props.accept && (
               <div className="text-center text-xs text-gray-500 leading-tight mb-3">
                  <p>
                     Supported formats <br />
                     <span className="font-semibold text-xs">({props.accept?.replace(/,/g, " , ")})</span>
                  </p>
               </div>
            )}
            <label htmlFor={props.id} className="text-xs border border-primary px-2 py-1 rounded-sm text-primary font-medium cursor-pointer select-none flex gap-1 items-center">
               <input {...props} hidden />
               <MdFileUpload size={18} />
               {label}
            </label>
         </div>
         {formikError && props.name && <ErrorFormik name={props.name} />}
      </div>
   );
}
