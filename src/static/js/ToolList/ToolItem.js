/**
 * Created by rpanos on 8/28/17.
 */

const React = require('React');

var ToolItem = React.createClass({
    getInitialState: function () {
        return {
            choice: 'neu',
            choiceClass: 'tool-item-choices neutral and-init'
        };
    },
    clickUp: function () {
        if (this.state.choice === 'neu' || this.state.choice === 'neg') {
            this.setState({
                choice: 'pos',
                choiceClass: ' tool-item-choices pos-choice'
            });
            // send count up
            if (this.props.onChoiceClick) {
                this.props.onChoiceClick('pos', this.props.choiceId);
            }
        } else {
            this.setState({
                choice: 'neu',
                choiceClass: 'tool-item-choices neutral'
            });
            // send count up
            if (this.props.onChoiceClick) {
                this.props.onChoiceClick('neu', this.props.choiceId);
            }
        }
    },
    clickDown: function () {
        if (this.state.choice === 'neu' || this.state.choice === 'pos') {
            this.setState({
                choice: 'neg',
                choiceClass: 'tool-item-choices neg-choice'
            });
                // send count up
            if (this.props.onChoiceClick) {
                this.props.onChoiceClick('neg', this.props.choiceId);
            }
        } else {
            this.setState({
                choice: 'neu',
                choiceClass: 'tool-item-choices neutral'
            });
                // send count up
            if (this.props.onChoiceClick) {
                this.props.onChoiceClick('neu', this.props.choiceId);
            }
        }
    },
    render: function () {
        return <div className="tool-item-container">
            <div className="tool-item-title">
                {this.props.title}
                </div>
            <div className={this.state.choiceClass}>
                <div className="icon-wrapper thumb-up" onClick={this.clickUp} >
                    <img src="/img/thumbs-up-24.png" />
                </div>
                <div className="icon-wrapper thumb-down" onClick={this.clickDown}>
                    <img src="/img/thumbs-down-24.png" />
                </div>
            </div>
        </div>;
    }
});

export default ToolItem;