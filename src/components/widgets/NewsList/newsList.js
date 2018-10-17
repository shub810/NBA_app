import React, { Component }  from 'react';
import axios from 'axios';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { URL } from "../../../config";

import styles from './newsList.css';

import Button from '../Buttons/button';

class NewsList extends Component {

    state = {
        items: [],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount
    }

    componentWillMount() {
        this.request(this.state.start, this.state.end)
    }

    request = (start, end) => {
        axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
        .then(response => {
            this.setState({
                items: [...this.state.items, ...response.data]
            })
        }); 
    }

    renderNews = (type) => {
        let template = null;
        switch (type) 
        {
            case 'card':
                template = this.state.items.map((item) => {
                    return (
                        <CSSTransition
                            classNames={{
                                enter: styles.newlist_items_wrapper,
                                enterActive: styles.newlist_items_wrapper_enter
                            }}
                            timeout={500}
                            key={item.id}>
                            <div key={item.id}>
                                <div className={styles.newlist_items}>
                                    <Link to={`/articles/${item.id}`}>
                                        <h2>{item.title}</h2>
                                    </Link>
                                </div>
                            </div>
                        </CSSTransition>
                    )
                })
                break;
            default:
                break;
        }
        return template;
    }

    loadMore = () => {
        this.request(this.state.end, this.state.end + this.state.amount);
        this.setState({
            end: this.state.end + this.state.amount
        });
    }

    render() {
        return (
            <div>
                <TransitionGroup
                    component="div"
                    className="list"
                >
                    {this.renderNews(this.props.type)}
                </TransitionGroup>

                <Button 
                    type="loadmore"
                    loadMore={() => this.loadMore()}  
                    cta="Load More News"                  
                />
            </div>
        )
    }
}

export default NewsList;