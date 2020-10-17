import React from 'react';

class Title extends React.Component {
    constructor() {
        super();
    }

    render () {
        let titles = this.props.state.titles;
        let optionItems = titles.map((title) =>
                <option key={title.id}>{title.name}</option>
            );

        return (
         <div>
             <select>
                {optionItems}
             </select>
         </div>
        )
    }
}
export default Title;