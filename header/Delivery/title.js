import { connect, useSelector } from "react-redux";
import { ValueAC } from "../../redux/action";


const Title=(props)=>{
    const onChange=(e)=>{
        const values=e.target.value
        props.value(values)
      
    }

    const text=useSelector(state=>{
        const {TitleReducer} = state
        return TitleReducer.value
    })

    return(
        <div>
            <input onChange={onChange}  />
            <p>{text}</p>
        </div>
    )
}

function mapStateToProps(state){
    return{
        value: state.TitleReducer.value
    }
}
function mapDispatchToProps(dispath){
    return{
        value:(e)=>{
            return dispath(ValueAC(e))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Title)