

const ProgressBar = ({ percentage }) => {
    return (
        <div className="bg-gray-300 h-4 w-full rounded-lg">
            <div className={`bg-blue-500 h-full rounded-lg`} style={{ width: `${percentage}%` }}></div>
        </div>
    );
}

export default ProgressBar;
