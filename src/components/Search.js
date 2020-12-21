import React from 'react'
import Autocomplete from 'react-autocomplete'
import { List, CellMeasurer, CellMeasurerCache } from 'react-virtualized';
import "../search.css"


export default class Search extends React.Component {
  constructor (props) {
    super()
    this.cellHeightCache = new CellMeasurerCache({
      defaultHeight: 42,
      fixedWidth: true
    })
    this.state = {
      searchingFor: '',
      data: props.data,
      serving_sizes: []
    }
  }

  onSelect = (value, selection) => {
    this.setState({searchingFor: selection.food_name, serving_sizes: selection.serving_sizes})
    console.log(selection.serving_sizes)
  }

  renderItem = (item) => {
    return <div className='searchItem' value={item.food_code}>{item.food_name}</div>
  }

  renderMenu = (items, _, autocompleteStyle) => {
    this.cellHeightCache.clearAll()
    const rowRenderer = ({key, index, parent, style}) => {
      const Item = items[index]
      const onMouseDown = e => {
        if(e.button === 0) {
          Item.props.onClick(e)
        }
      }
      return (
        <CellMeasurer
          cache={this.cellHeightCache}
          key={key}
          parent={parent}
          rowIndex={index}
        >
          {React.cloneElement(Item, {
            style: style, 
            key: key, 
            onMouseEnter: null, 
            onMouseDown: onMouseDown
          })}
        </CellMeasurer>
      )
    }
    return (
      <List
        rowHeight={this.cellHeightCache.rowHeight}
        height={207}
        rowCount={items.length}
        rowRenderer={rowRenderer}
        width={autocompleteStyle.minWidth || 0}
        style={{
          height: 'auto',
          maxHeight: '207px'
        }}
      />
    )
  }
  
  render () {
    const searchTerm = this.state.searchingFor;
    let data = searchTerm 
      ? this.state.data.filter(item => 
          item.food_name.toLowerCase().startsWith(searchTerm.toLowerCase()))
        .concat(this.state.data.filter(item =>
          item.food_name.toLowerCase().includes(searchTerm.toLowerCase()) && !item.food_name.toLowerCase().startsWith(searchTerm.toLowerCase())
        ))
      : []
    return (
      <div>
        <form>
        <div className="form-group col-md-4 offset-md-4">
        <label>Food name</label><br />
        <Autocomplete
          items={data}
          value={this.state.searchingFor}
          
          renderItem={this.renderItem}
          renderMenu={this.renderMenu}
          inputProps={{className: "form-control"}}
          wrapperStyle={{style: {}}}
          
          
          getItemValue={ item => item.food_name }
          onChange={(e, value) => this.setState({searchingFor: value, serving_sizes: []})}
          onSelect={this.onSelect}
        />
        </div>
        <div className="form-group col-md-4 offset-md-4">
                        <label htmlFor="serving-size">Serving size</label>
                        <select className="custom-select" id="serving-size">
                          {this.state.serving_sizes.map((item) => <option>{item.serving_description}</option>)}
                        </select>
        </div>
        <div className="offset-md-4 col-md-4">
                        <button type="submit" className="btn btn-primary">Add</button>
          </div>
        </form>
      </div>
    )
  }
}