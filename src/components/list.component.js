import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = state => {
    return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (
    <div>
        <h2>Articles</h2>
        <div>
            <Link to="/form">Add article</Link>
        </div>
        <ul className='list-group list-group-flush'>
            {articles.map(el => (
                <li className='list-group-item' key={el.id}>
                    <Link to={`article/${el.id}`}>{el.title}</Link>
                </li>
            ))}
        </ul>
    </div>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;
