import PropTypes from 'prop-types'

const AddTask = ({ color, title, onClick }) => {
  return (
    <button onClick={onClick} style={{ backgroundColor: color }} className="margin-right right padding primary-color">
      {title}
    </button>
  );
};
AddTask.defaultProps = {
  color: "red",
  title: "Add Task"
};

AddTask.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired
}
export default AddTask;
