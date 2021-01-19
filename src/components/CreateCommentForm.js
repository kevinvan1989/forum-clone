import React, { Component } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Form } from "formik";
import Button from "./Button";

export default class CreateCommentForm extends Component {
  render() {
    const { setFieldValue, values } = this.props;
    return (
      <div>
        <Form>
          <h2>Add comment</h2>
          <CKEditor
            editor={ClassicEditor}
            data={values.ADD_COMMENT_editor}
            onChange={(event, editor) => {
              const data = editor.getData();
              setFieldValue("ADD_COMMENT_editor", data);
            }}
            autofocus={true}
            // Focus on editor / textfield on load
            onInit={(editor) => {
              editor.editing.view.focus();
            }}
          />
          <Button type="submit" btnText="Post comment" />
        </Form>
      </div>
    );
  }
}
