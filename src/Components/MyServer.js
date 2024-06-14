import { ServerService } from "../Services/DataService";

export const MyServer = () => {
  return (
    <>
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="text-2xl font-bold text-gray-900 mb-4">
        <i>Server Info</i>
      </div>
      <div className="text-lg font-bold text-gray-900 mb-2">
        {ServerService.getServerData().distro_name}
      </div>
      <div className="text-lg font-bold text-gray-900 mb-2">
        {ServerService.getServerData().distro_version}
      </div>
      <div className="text-lg font-bold text-gray-900 mb-2">
        {ServerService.getServerData().kernel_version}
      </div>
      <div className="text-lg font-bold text-gray-900 mb-2">
        {ServerService.getServerData().last_update}
      </div>
    </div>
  </>
  
  );
};
