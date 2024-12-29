import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

function CreatePost() {
  return (
    <div className='createPostPage'>
        <Formik>
            <Form>
                <label>Title: </label>
                <Field
                    id='inputCreatePost'
                    name='title'
                    placeholder='Ex. Title'
                />
            </Form>
        </Formik>
    </div>
  )
}

export default CreatePost
