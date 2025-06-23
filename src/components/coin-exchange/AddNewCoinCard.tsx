import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Plus, ChevronDown } from "lucide-react";
import { mockPlatforms } from "@/examples/mockPlatforms"; // <-- imported

interface AddNewCoinCardProps {
  onSelectPlatform: (platform: string) => void;
}

const AddNewCoinCard: React.FC<AddNewCoinCardProps> = ({ onSelectPlatform }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Plus className="h-3 w-3" />
          <span>Add Coin</span>
          <ChevronDown className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {mockPlatforms.map((platform) => (
          <DropdownMenuItem key={platform} onClick={() => onSelectPlatform(platform)}>
            {platform}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AddNewCoinCard;
