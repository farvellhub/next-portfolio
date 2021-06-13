import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";

class CodeBlock extends PureComponent {
    static propTypes = {
        value: PropTypes.string.isRequired,
        language: PropTypes.string,
    };

    static defaultProps = {
        language: null,
    };

    render(): JSX.Element {
        return (
        // <SyntaxHighlighter language={this.props.language} style={docco}>
            <SyntaxHighlighter style={docco}>{/* {this.props.value} */}</SyntaxHighlighter>
        );
    }
}

export default CodeBlock;
