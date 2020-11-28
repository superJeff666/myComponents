import React, {FC,useRef, ChangeEvent} from 'react';
import axios from 'axios';
import Button from '../Button/button';

export interface UploadProps {
    action: string;
    onProgress?: (percentage:number,file:File) => void;
    onSuccess?: (data:any,file:File) => void;
    onError?: (err:any,file:File) => void;
}

export const Upload:FC<UploadProps> = (props) => {
    const {action,onProgress,onSuccess,onError} = props;
    const fileInput = useRef<HTMLInputElement>(null);
    const handleClick = () => {
        if(fileInput.current) {
            fileInput.current.click();
        }
    }
    const handleFileChange = (e:ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files;
        if(!file) {
            return;
        }
        uploadFiles(file);
        if(fileInput.current) {
            fileInput.current.value = '';
        }
    }
    const uploadFiles = (files:FileList) => {
        let postFiles = Array.from(files);
        postFiles.forEach(file => {
            const formData = new FormData();
            formData.append(file.name,file);
            axios.post(action, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: (e) => {
                    let percentage = Math.round((e.loaded * 100) / e.total) || 0;
                    if(percentage < 100) {
                        if(onProgress) {
                            onProgress(percentage,file);
                        }
                    }
                }
            }).then(res => {
                console.log(res);
                if(onSuccess) {
                    onSuccess(res.data,file);
                }
            }).catch(err => {
                console.log(err);
                if(onError) {
                    onError(err,file);
                }
            })
        })
    }
    return (
        <div className='viking-upload-component'>
            <Button 
               btnType='primary'
               onClick={handleClick}
            >Upload File</Button>
            <input type="file" className='viking-file-input'
               style={{display:'none'}}
               ref={fileInput}
               onChange={handleFileChange}
            />
        </div>
    )
}
export default Upload;