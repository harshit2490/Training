import toastr from "toastr";
import "toastr/build/toastr.min.css";

export function useToastr() {
  toastr.options.positionClass = "toast-top-center";
  toastr.options.timeOut = 6000;
  toastr.options.closeButton = true;
  toastr.options.progressBar = true;
  return toastr;
}
