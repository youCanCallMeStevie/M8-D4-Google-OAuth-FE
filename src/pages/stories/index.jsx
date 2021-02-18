import React, { useState, useEffect } from "react";
import { Container, ListGroup } from "react-bootstrap";
import { editArticle, deleteArticle, getArticles } from "../../api/articles";
import uniqid from "uniqid"

function Stories () {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
		fetchArticles();
	}, []);

	const fetchArticles = async () => {
		const result = await getArticles();
		console.log(result);
		setArticles(result.articles);
	};
	const showArticles = (articles) => {
		return (
			<ListGroup>
				{articles.map((article) => {
					return (
						<ListGroup.Item key={uniqid}>
							<div className='d-flex justify-conten-around'>
								<img
									src={article.cover}
									className='mr-3'
									style={{ width: "40px", height: "40px" }}
								/>

								<h3 className='mr-3'>{article.headLine}</h3>
{/* add buttons to update which takes to "backoffice" with details & add button to delete */}
								<p>{article.author.name}</p>
							</div>
						</ListGroup.Item>
					);
				})}
			</ListGroup>
		);
	};
	
		return <Container>
            {showArticles(articles)}
        </Container>;
	
};

export default Stories;

