import { UploadIcon } from "../icons/Common";
const FileUpload = () => {
  return (
    <div className="flex items-center flex-col justify-center cursor-pointer my-6 w-full">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-shade border-dashed rounded-lg cursor-pointer hover:bg-gray-100"
      >
        <div className="flex items-center justify-center px-4 pt-5 gap-3 pb-6">
          <UploadIcon />
          <div className="flex flex-col items-center text-center justify-center">
            <p className="mb-2 text-sm font-bold text-main-bg">
              Drag & Drop or Choose file to upload
            </p>
            <p className="text-xs font-normal text-main-bg">
              JPG, PNG, PDF, CVS
            </p>
          </div>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
      </label>
    </div>
  );
};
export default FileUpload;
