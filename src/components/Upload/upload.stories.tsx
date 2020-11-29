import react from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Upload} from './upload';
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

const simpleUpload = () => {
    return (
        <Upload
         action="https://jsonplaceholder.typicode.com/posts/"
         onChange={action('changed')}
        />
    )
}
storiesOf('upload component',module)
    .add('Upload', simpleUpload);