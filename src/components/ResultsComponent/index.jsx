import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { css } from 'aphrodite';
import styles from './style';

import { getVideoData } from './actions'

const mapStateToProps = state => ({
    list: state.SearchListReducer.searchList
});

const mapDispatchToProps = dispatch => ({
    getVideoData: videoData => dispatch(getVideoData(videoData))
})


class ResultsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: ''
        }
        this.getVideoData = this.getVideoData.bind(this);
    }

    getVideoData(event, data) {
        this.setState({ clicked: data.id.videoId })
        this.props.getVideoData(data);
    }

    render() {
        return (
            <div className={css(styles.resultsWrap)}>
                <span className={css(styles.title)}>Results</span>
                <ul className={css(styles.resultsList)}>{
                    this.props.list.items ? this.props.list.items.map((data, i) =>
                        (<li key={i} onClick={event => this.getVideoData(event, data)} className={css([styles.resultsListItem, this.state.clicked === data.id.videoId ? { ...styles.active } : ''])}>
                            {data.snippet.title}
                        </li>)) : ''
                }
                </ul>
            </div>
        );
    }
}

ResultsComponent.propTypes = {
    list: PropTypes.object,
    getVideoData: PropTypes.func
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ResultsComponent)
