/**
 * Created by rpanos on 8/28/17.
 */

import ToolItem from '../ToolList/ToolItem';

const React = require('React');
const _ = require('lodash');


var WebToolList = React.createClass({
    getInitialState: function () {
        return {
            items: [],
            choiceCount: 0
        };

    },
    componentDidMount: function() {
        this.updateList(this.props.initialListLen);
    },
    updateList: function(reqLimit) {
        var that = this, srcUrl;
        if (reqLimit) {
            srcUrl = that.props.dataUrl + '?reqLimit=' + reqLimit
        } else {
            srcUrl = that.props.dataUrl
        }

        return fetch(srcUrl)
                .then( function(result) {
                    return result.json();
                }).then(function(nameList) {
                    let currId = 0, toolItems = [];

                    nameList.forEach(itemName => {
                        let item = _.find(that.state.items,
                            function(item) { return item.title === itemName });
                        if (!item) {
                            item = {title: itemName};
                            item.choice = 'neu'; // get from prev
                        }
                        item.id = currId;

                        currId++;
                        toolItems.push(item);
                    });
                    that.setState({
                        items: toolItems,
                        choiceCount: 0
                    });
                });
    },
    updateChoice: function(choice, choiceId) {
        const items = this.state.items;

        let nonNeutralCount = 0, match = _.find(this.state.items, function(item) { return item.id === choiceId });
        if (match) {
            match.choice = choice;
        }
        //Assumption: if a user puts a choice back to neutral, we are not counting it
        let nonNeutral = _.filter(this.state.items, function(item) { return item.choice !== 'neu' });

        if (nonNeutral) {
            nonNeutralCount = nonNeutral.length;
        } else {
            nonNeutralCount = 0;
        }
        if (nonNeutralCount >= this.props.initialAnswerLen) {
            this.updateList();
        }

        this.setState({
            items: items,
            choiceCount: nonNeutralCount
        });
    },
    render: function () {

        return <div className="survey-app">
                <div className="survey-intro">
                    <div className="wm-icon"></div>
                    <h2>JS Tool Survey</h2>
                    <p>
                        Please indicate which Javascript tools and frameworks you have opinions on.
                    </p>
                </div>
                <div className="survey-container">
            {this.state.items.map(function (item, number) {
                console.log(number, '= item =', item);
                //return <li key={number}>{item}</li>
                    return <ToolItem title={item.title} onChoiceClick={this.updateChoice}
                                     choiceId={item.id} >
                    </ToolItem>

            }, this)}
                </div>
            </div>;
    }
});

export default WebToolList;