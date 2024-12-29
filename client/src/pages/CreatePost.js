import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

function CreatePost() {

    const initialValues = {
        title: '',
        postText: '',
        username: '',
    }
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className='createPostPage'>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form className='formContainer'>
                    <label>Title: </label>
                    <Field
                        id='inputCreatePost'
                        name='title'
                        placeholder='Ex. Title...'
                    />

                    <label>Post: </label>
                    <Field
                        id='inputCreatePost'
                        name='postText'
                        placeholder='Ex. Post...'
                    />

                    <label>Username: </label>
                    <Field
                        id='inputCreatePost'
                        name='username'
                        placeholder='Ex. John123...'
                    />

                    <button type='submit'>Create Post</button>
                </Form>
            </Formik>
        </div>
    )
}

export default CreatePost
