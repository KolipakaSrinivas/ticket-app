const ProgressDisplay = ({progress}) => {
  return (
    <div className="bg-gray-200 rounded-full w-full h-2.5">
      <div
        className={`bg-blue-600 h-2.5 rounded-full `}
        style={{width:`${progress}%`}}
      />
    </div>
  );
};

export default ProgressDisplay;
