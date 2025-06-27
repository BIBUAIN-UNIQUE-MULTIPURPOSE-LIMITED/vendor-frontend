import { Ticket } from "./ticket";

export const CCInbox = () => {
  return (
    <div className="bg-white flex items-start">
      <div className="divide-y">
        {/* ticket */}
        <h3 className="text-xl font-medium pb-2">Ticket</h3>
        <Ticket />
      </div>
      <div className="flex-1"></div>
    </div>
  );
};
