import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { css } from 'aphrodite';
import styles from './style';

const mapStateToProps = state => ({
    list: state.SearchListReducer.searchList,
    metaData: state.VideoMetaReducer.metaData
});

class DetailsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetailBool: false,
            thumbnailMeta: '',
            titleMeta: '',
            descMeta: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.list && nextProps.list.items && nextProps.metaData.snippet) {
            const data = nextProps.metaData.snippet;
            this.setState({
                showDetailBool: true,
                thumbnailMeta: data.thumbnails.high.url,
                titleMeta: data.title,
                descMeta: data.description
            })
        } else {
            this.setState({
                showDetailBool: false,
                thumbnailMeta: '',
                titleMeta: '',
                descMeta: ''
            })
        }
    }

    render() {
        return (
            <div className={css(styles.detailsWrap)}>
                <span className={css(styles.title)}>Details</span>
                {
                    (this.state.showDetailBool) ?
                        <div className={css(styles.detailsDiv)}>
                            <img src={this.state.thumbnailMeta} alt="" className={css(styles.detailsImg)} />
                            <div className={css(styles.detailsTextWrap)}>
                                <span>{this.state.titleMeta}</span>
                                <p className={css(styles.detailsDesc)}>{this.state.descMeta}</p>
                            </div>
                        </div> : ''
                }
            </div>
        );
    }
}

DetailsComponent.propTypes = {
    metaData: PropTypes.object,
    list: PropTypes.object
}

export default connect(mapStateToProps)(DetailsComponent);

