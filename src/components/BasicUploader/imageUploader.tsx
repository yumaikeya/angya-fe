import {
    FileUploadDropzone,
    FileUploadList,
    FileUploadRoot,
    FileAcceptDetails,
    FileChangeDetails
  } from "@/components/ChakraUI/file-upload"
  
  type Props = {
    onAccept?: (details: FileAcceptDetails) => void
    onChange?: (e: FileChangeDetails) => void
    disabled: boolean
}
  const ImageUploader = ({onAccept, disabled, onChange}: Props) => {
    return (
      <FileUploadRoot maxW="xl" alignItems="stretch" disabled={disabled} maxFiles={100} accept={["image/png", "image/jpeg"]} onFileAccept={onAccept} onFileChange={onChange}>
        <FileUploadDropzone
          label="Drag and drop here to upload"
          description=".png, .jpg, .jpeg"
        />
        <FileUploadList />
      </FileUploadRoot>
    )
  }
  
  export default ImageUploader