"use client";

import { CldUploadButton as CldUploadButtonDefault, CldUploadButtonProps, CldUploadWidgetResults } from 'next-cloudinary';

interface CldUploadButtonPropsWithFormData extends Omit<CldUploadButtonProps, "onUpload"> {
  onUpload: (formData: FormData) => void
}

const CldUploadButton = (props: CldUploadButtonPropsWithFormData) => {
  async function handleOnUpload(results: CldUploadWidgetResults) {
    if ( typeof props.onUpload === 'function' ) {
      const formData = new FormData();
      formData.append('results', JSON.stringify(results))
      props.onUpload(formData);
    }
  }
  return <CldUploadButtonDefault {...props} onUpload={handleOnUpload} />;
}

export default CldUploadButton;