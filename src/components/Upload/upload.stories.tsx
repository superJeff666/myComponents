import react from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Upload, UploadFile} from './upload';
import React from 'react';

// const checkFileSize = (file:File) => {
//     if(Math.round(file.size / 1024) > 50) {
//         alert('file is so big');
//         return false;
//     }
//     return true;
// }

// const filePromise = (file:File) => {
//     const newFile = new File([file],'new_name.xls', {type:file.type});
//     return Promise.resolve(newFile)
// }

const defaultFileList:UploadFile[] =  [
    {uid:'123',size:1234, name:'hello.md',status:'uploading',percent:30},
    {uid:'122',size:1234, name:'xyz.md',status:'success',percent:30},
    {uid:'121',size:1234, name:'test.md',status:'error',percent:30}
]

const simpleUpload = () => {
    return (
        <Upload
         action="https://jsonplaceholder.typicode.com/posts/"
         onChange={action('changed')}
         defaultFileList={defaultFileList}
         onRemove={action('removed')}
        />
    )
}
storiesOf('upload component',module)
    .add('Upload', simpleUpload);