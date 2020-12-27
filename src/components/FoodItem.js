import React, {Component} from "react"

// rework this to work with li item

class FoodItem extends Component
{
    constructor(props)
    {
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete(e)
    {
        const del_index = parseInt(e.target.key)
        console.log(del_index)
        fetch("http://localhost:5000/edit",
        {
            method: "POST",
            credentials: "include",
            headers:
            {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    delete_index: del_index
                }
            )
        })
        .then(() => {this.props.rerenderParentCallback();})
        
    }

    render()
    {
        return (
        <li key={this.props.index} onClick={this.handleDelete}>{this.props.name}</li>
            // <div className="card" id={this.props.name} style={{display:"inline-block",marginTop: 10, marginRight:10, zIndex:0}}>
            //     <div className="card-body" style={{padding: 0}}>
            //         <table>
            //         <tbody>
            //             <tr>
            //             <td>
            //                 <div className="card-text" style={{textTransform: "capitalize",display:"block",padding:"8px 10px", margin:0}}>
            //                     {this.props.name}
            //                 </div>
            //             </td>
            //             <td className="card-text deleteButton" id={`${this.props.index}`} style={{cursor: "pointer",padding:"8px 10px", margin:0}} onClick={this.handleDelete}>
            //                 <div id={`${this.props.index}`}>
            //                     x
            //                 </div>
            //             </td>
            //             </tr>
            //             </tbody>
            //         </table>
            //     </div>
            // </div>
        )
    }
}

export default FoodItem