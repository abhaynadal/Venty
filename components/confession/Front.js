import { useEffect, useState } from 'react';

const Front = ({ avatar , children, description, username, timestamp, subject = "Confession" }) => {
  const [dateString, setDateString] = useState("");

  const updateTimeDifference = () => {
    if (timestamp) {
      const today = new Date();
      const messageDate = new Date(timestamp.seconds * 1000);
      const timeDifference = today - messageDate;
      const minutes = Math.floor(timeDifference / (1000 * 60));
      const seconds = Math.floor(timeDifference / 1000);
      const hours = Math.floor(timeDifference / (1000 * 60 * 60));
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
      if (days >= 1) {
        if (days >= 3) {
          setDateString(messageDate.toLocaleDateString('en-us', { month: 'short', day: 'numeric' }));
        } else {
          setDateString(`${days} day${days > 1 ? 's' : ''} ago`);
        }
      } else if (hours >= 1) {
        setDateString(`${hours} hr${hours > 1 ? 's' : ''} ago`);
      } else if (minutes >= 1) {
        setDateString(`${minutes} min${minutes > 1 ? 's' : ''} ago`);
      } else {
        setDateString(`${seconds} sec${seconds > 1 ? 's' : ''} ago`);
      }
    }
  }  

  // call updateTimeDifference once to set the initial value of dateString
  useEffect(() => {
    updateTimeDifference();
  }, [timestamp]);

  // use setInterval to call updateTimeDifference every second to update the seconds part of dateString
  useEffect(() => {
    const interval = setInterval(updateTimeDifference, 1000);
    return () => clearInterval(interval);
  }, [timestamp]);

  
  return (
    <div>      

    <div className="py-4 px-8 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg my-10 hover:shadow-xl duration-1000">
    <div className="flex items-center pb-3">
        <img src={avatar} alt="image" className="w-10 h-10 rounded-full object-cover cursor-pointer mr-2" />
        <div>
            <h1 className="font-semibold text-xl text-gray-900">{dateString}</h1>    
            <p className='text-xs text-gray-500'>Confession</p>
        </div>            
    </div>
    <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
        <div className="mt-1">
            <h2 className="font-semibold text-xl text-gray-700">{subject}</h2>                    
        </div>
        </div>                
    </div>

    <div className="py-4">
        <p className="text-gray-700 text-sm whitespace-pre-line break-words">
        {description?.length > 515 ? `${description.slice(0, 512)}...` : description}
        </p>
    </div>
    <div className="text-teal-600">
        <p className="text-sm">{children}</p>
    </div>
    </div> 
    </div>
  );
}

export default Front;