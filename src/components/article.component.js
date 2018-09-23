import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return {
        articles: state.articles,
        ownProps,
    };
};

function getArticle (articles, id) {
    const article = articles.find((item) => item.id === id);
    return <div>article id: {article.id} title: {article.title}</div>;
}

const ConnectedArticle = ({ articles, ownProps }) => (
    <div>
        <h3>Article</h3>
        <Link to="/">Articles</Link>
        {ownProps && console.log('id is', ownProps)}
        {(articles && ownProps.match.params.id) &&
            getArticle(articles, ownProps.match.params.id)
        }
        <div>Num articles: {articles.length}</div>

    </div>
);

const Article = connect(mapStateToProps)(ConnectedArticle);

export default Article;
