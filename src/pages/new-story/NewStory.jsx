import React, { Component } from "react";
import ReactQuill from "react-quill";
import { Container } from "react-bootstrap";
import "react-quill/dist/quill.bubble.css";
import { Button } from "react-bootstrap";
import "./styles.scss";
import CategoryPicker from "../../components/CategoryPicker";

import { postArticle } from "../../api/articles";

export default class NewStory extends Component {
  state = {
    // htmlString: "",
    article: {
      headLine: "",
      subHead: "",
      content: "",
      category: "",
      author: {
        name: "John Doe",
        img: "https://ui-avatars.com/api/?name=John+Doe",
      },
      cover: "",
    }
  };

  editor = React.createRef();

	handleSubmit = async () => {
    const result = await postArticle(this.state.article);

		if (result.success) {
			this.setState({
				article: {
					headLine: "",
					content: "",
					category: { name: "", img: "" },
					author: {name: "John Doe",
          img: "https://ui-avatars.com/api/?name=John+Doe",
						},
					cover: "",
				},
			});
    }
  };
  onChange = htmlString => {
    this.setState({ article : {content: htmlString, ...this.state.article } });
    console.log(htmlString);
  };
  onKeyDown = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      this.editor && this.editor.current.focus();
    }
  };
  render() {
    const { headLine, content, category, cover } = this.state.article;
    return (
      <Container className="new-story-container" expand="md">
        <div className="category-container">
          <CategoryPicker
            onChange={topic => {
              console.log(topic);
            }}
          />
        </div>
        <input
        id="headLine"
        value={headLine}
          onKeyDown={this.onKeyDown}
          placeholder="Title"
          className="article-title-input"
        />

        <ReactQuill
          modules={NewStory.modules}
          formats={NewStory.formats}
          ref={this.editor}
          theme="bubble"
          value={content}
          id="content"
          onChange={this.onChange}
          placeholder="Tell your story..."
        />
        <input
          onKeyDown={this.onKeyDown}
          placeholder="Cover link e.g : https://picsum.photos/800"
          className="article-cover-input"
          id="cover"
          value={cover}
        />

        <Button onClick={this.handleSubmit} variant="success" className="post-btn">
          Post
        </Button>
      </Container>
    );
  }
}

NewStory.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],

    ["bold", "italic", "blockquote"],
    [
      { align: "" },
      { align: "center" },
      { align: "right" },
      { align: "justify" },
    ],

    ["link", "image"],

    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
NewStory.formats = [
  "header",
  "bold",
  "italic",
  "blockquote",
  "align",

  "link",
  "image",
];
