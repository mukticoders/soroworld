import React from "react";
import { Celestial } from "../../types/data";

interface DetailsProps {
 isOpen: boolean;
 onClose: () => void;
 data?: Celestial | null;
}

export const Details: React.FC<DetailsProps> = ({ isOpen, onClose, data }) => {
 if (!data || !isOpen) return null;

 return (
  <>
   <div className="fixed inset-0 bg-black/20 z-10" onClick={onClose}></div>
   <div
    className="fixed inset-0 flex items-center justify-center z-20"
    onClick={(e) => e.stopPropagation()}
   >
    <div className="w-full max-w-lg p-6 bg-white shadow-xl rounded-lg">
     <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
      Details
     </h3>
     <div className="mt-2">
      <h4 className="text-xl font-semibold text-gray-800">{data.name}</h4>
      <p className="text-gray-600 mt-2">Group: {data.group}</p>
      <p className="text-gray-600 mt-2">
         Orbit Radius: {data.params.orbitRadius} AU
      </p>
      <p className="text-gray-600 mt-2">Inclination: {data.params.inclination}°</p>
      <p className="text-gray-600 mt-2">Velocity: {data.params.velocity} km/s</p>
     </div>
     <div className="mt-4 flex justify-end">
      <button
       type="button"
       className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
       onClick={onClose}
      >
       Close
      </button>
     </div>
    </div>
   </div>
  </>
 );
};
