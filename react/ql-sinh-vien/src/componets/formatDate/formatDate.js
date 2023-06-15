import Moment from 'react-moment';
function FormatDate(props) {
    return (
        <Moment format="DD/MM/YYYY">
            {props.date}
        </Moment>
    )
}
export default FormatDate;