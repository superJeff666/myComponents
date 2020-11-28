import react from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Upload} from './upload';
import React from 'react';

const simpleUpload = () => {
    return (
        <Upload
         action="https://www.mocky.io/v2/5185415ba171ea3a00704eed/posts/"
        />
    )
}
storiesOf('upload component',module)
    .add('Upload', simpleUpload);